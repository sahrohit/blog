import type socialIcons from "@assets/socialIcons";
import type { ThemePresets } from "@astrojs/markdown-remark";

export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
  shikiTheme: ThemePresets;
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];
