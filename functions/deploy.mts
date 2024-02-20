export default async () => {
    await fetch(process.env.BUILD_HOOK! 
      ?? Netlify.env.get("BUILD_HOOK")
      , {
        body: "{}",
        method: "POST"
    })
  return new Response("Successfully rebuild triggered!")
}