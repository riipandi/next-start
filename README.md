# Next.js starter template

<p align="left">
    <a href="https://github.com/riipandi/next-start/pulse">
        <img src="https://img.shields.io/badge/Contributions-welcome-gray.svg" alt="Contribution">
    </a>
    <a href="https://github.com/riipandi/next-start">
        <img src="https://img.shields.io/github/languages/top/riipandi/next-start" alt="Top language">
    </a>
    <a href="https://aris.mit-license.org">
        <img src="https://img.shields.io/github/license/riipandi/next-start" alt="License">
    </a>
</p>

## Introduction

Super simple starter project for [Next.js](https://nextjs.org) with [Tailwind CSS v4](https://tailwindcss.com) and [Typescript](https://www.typescriptlang.org).

## Quick Start

### Installation

**Using pnpm (recomended):**

```sh
pnpm create next-app@latest myapp-name --use-pnpm -e https://github.com/riipandi/next-start
```

**If you want to use npm instead:**

```sh
npx create-next-app myapp-name --use-npm -e https://github.com/riipandi/next-start
```

> Don't forget to change `myapp-name` with your real application name.

### Up and Running

| Task                   | NPM             | Yarn         | PNPM           |
|------------------------|-----------------|--------------|----------------|
| Install dependencies   | `npm install`   | `yarn`       | `pnpm install` |
| Serve with hot reload  | `npm run dev`   | `yarn dev`   | `pnpm dev`     |
| Build for production   | `npm run build` | `yarn build` | `pnpm build`   |
| Launch generated build | `npm run start` | `yarn start` | `pnpm start`   |

Application will run at `http://localhost:3000`

For detailed explanation on how things work, check out [Next.js docs](https://nextjs.org/docs/getting-started).

- [Next.js app router playground](https://github.com/vercel/app-playground) - learn more about Next.js app directory.
- [Dynamic Metadata](https://nextjs.org/blog/next-13-2#built-in-seo-support-with-new-metadata-api) - learn more about SEO using dynamic metadata.

## Deploy Your Own

You'll want to fork this repository and deploy your own Next.js website. Once you have an
image generator that sparks joy, you can setup [automatic GitHub](https://vercel.com/github)
deployments so that pushing to master will deploy to production! 🚀

<p align="left" style="margin-top: 20px;">
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/riipandi/next-start&project-name=next-start&repo-name=next-start&env=NEXT_PUBLIC_BASE_URL" style="margin-right: 12px;">
    <img src="https://vercel.com/button" alt="Deploy with Vercel" height="32px" />
  </a>
  <a href="https://deploy.workers.cloudflare.com/?url=https://github.com/riipandi/next-start">
    <img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare Workers" height="32px" />
  </a>
</p>

#### Vercel Configuration (optional)

If you are using monorepo you will need to configure a few things:

- Settings -> General -> Root Directory : `apps/web/` (assuming your app is in `apps/web`)
- Settings -> Git -> Ignored Build Step : `git diff --quiet HEAD^ HEAD ./`

#### Cloudflare Deployment

You need to add `NODE_VERSION` with value `20.18.0` or greater than version 20 on the environment variables setting.
Visit [Cloudflare pages docs](https://developers.cloudflare.com/pages/platform/build-configuration/) for more information.

For the preview branch:

```env
NEXT_PUBLIC_BASE_URL=${CF_PAGES_URL}
```

## Development

This project uses TypeScript for type checking, [Biome](https://biomejs.dev) for code formatting
and linting which is configured in [`biome.json`](./biome.json). It's recommended to get TypeScript
set up for your editor and install an editor plugin (like the [VSCode Biome plugin](https://marketplace.visualstudio.com/items?itemName=biomejs.biome))
to get auto-formatting on saving and get a really great in-editor experience with type checking
and auto-complete.

## License

This project is open-sourced software licensed under the [MIT license](./LICENSE).

Copyrights in this project are retained by their contributors.
See the [license file](./LICENSE) for more information.

---

<sub>🤫 Psst! If you like my work you can support me via [GitHub sponsors](https://github.com/sponsors/riipandi).</sub>
