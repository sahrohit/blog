import { type CollectionEntry } from "astro:content";
import type { Post } from "@lib/interfaces";
import { slugifyStr } from "./slugify";
import { extractTargetBlocks } from "@lib/blog-helpers";
import {
  downloadFile,
  getBlock,
  getAllBlocksByBlockId,
} from "@lib/notion/client";

export function blogEntryFromNotionPost(post: Post): CollectionEntry<"blog"> {
  return {
    id: post.PageId,
    slug: post.Slug?.trim() || slugifyStr(post.Title),
    body: "",
    collection: "blog",
    data: {
      title: post.Title,
      description: post.Excerpt,
      pubDatetime: new Date(post.CreatedAt),
      modDatetime: new Date(post.UpdatedAt),
      // author: "Son Nguyen", // default to SITE.author
      featured: post.Featured,
      draft: false, // assume all posts are published
      tags: post.Tags.map(tag => tag.name),
      ogImage: post.FeaturedImage?.Url,
      // canonicalURL: "",
    },
  };
}

export async function queryNotionPostBlocks({ pageId }: { pageId: string }) {
  if (!pageId) {
    return [];
  }
  // Get all blocks
  const blocks = await getAllBlocksByBlockId(pageId);

  const fileAtacchedBlocks = extractTargetBlocks("image", blocks)
    .concat(extractTargetBlocks("file", blocks))
    .filter(block => {
      if (!block) {
        return false;
      }
      const imageOrFile = block.Image || block.File;
      return imageOrFile && imageOrFile.File && imageOrFile.File.Url;
    });

  // Download files
  await Promise.all(
    fileAtacchedBlocks
      .map(async block => {
        const imageOrFile = block.Image || block.File;
        if (
          !imageOrFile ||
          !imageOrFile.File ||
          !imageOrFile.File.Url ||
          !imageOrFile.File.ExpiryTime
        ) {
          console.log("Invalid file URL");
          return Promise.reject();
        }
        const expiryTime = imageOrFile.File.ExpiryTime;
        if (Date.parse(expiryTime) > Date.now()) {
          return Promise.resolve(block);
        }
        return getBlock(block.Id);
      })
      .map(promise =>
        promise.then(block => {
          let url!: URL;
          try {
            const imageOrFile = block.Image || block.File;
            if (!imageOrFile || !imageOrFile.File || !imageOrFile.File.Url) {
              console.log("Invalid file URL");
              return Promise.reject();
            }
            url = new URL(imageOrFile.File.Url);
          } catch (err) {
            console.log("Invalid file URL");
            return Promise.reject();
          }
          return Promise.resolve(url);
        })
      )
      .map(promise => promise.then(downloadFile))
  );

  return blocks;
}
