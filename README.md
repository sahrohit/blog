<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Rohit's Blog</h3>

[![Netlify Status](https://api.netlify.com/api/v1/badges/139089df-2b3f-4aa7-a323-332b40e8b58b/deploy-status)](https://app.netlify.com/sites/sahrohit-blog/deploys)

  <p align="center">
Writing Something
  </p>

   <br />

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-electricity.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-markdown.svg)](https://forthebadge.com)

</div>

## About The Project

Static Blog Site connected with notion.

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps:

### Installation

1. Clone the repo

   ```sh copy
   git clone https://github.com/sahrohit/blog.git
   ```

2. Install the project dependencies

   ```sh copy
   pnpm install
   ```

3. Rename the `env.example` to `env.local` & update you enviroment variables in all the apps.

   ```js
   API_KEY = YOUR_API_KEY;
   ```

4. Run the following commands to start the development server

   ```sh copy
   pnpm dev
   ```

### Notion Table Design

| Key        | Type             | Description                   | Example                   |
| ---------- | ---------------- | ----------------------------- | ------------------------- |
| Slug       | Text             | URL Slug for the Post         | new-blog                  |
| Created At | Created Time     | Time of Blog Creation         | February 20, 2024 9:56 AM |
| Updated At | Last Edited Time | Last Edited Time for the Blog | February 20, 2024 9:56 AM |
| Status     | Select           | Status of the Blog            | ✅ Published               |
| Excerpt    | Text             | Small description of the Blog | New Blog New Content      |
| Featured   | Checkbox         | Mention in Featured Section   | ☑️                         |
| Tags       | Multi Select     | Tags for the Blog             | Start, New,...            |

### After Setting Up

To initialize the project,

`pnpm dev` - Run project in development mode

`pnpm build` - Generate production build for the project

For other commands, check `scripts` in package.json.

## Built With

- AstroJS
- Typescript

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
