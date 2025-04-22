# Next.js starter template

<p align="left">
    <a href="https://github.com/riipandi/next-start">
        <img src="https://img.shields.io/github/languages/top/riipandi/next-start" alt="Top language">
    </a>
    <a href="https://aris.mit-license.org">
        <img src="https://img.shields.io/github/license/riipandi/next-start" alt="License">
    </a>
    <a href="https://github.com/riipandi/next-start/pulse">
        <img src="https://img.shields.io/badge/Contributions-welcome-gray.svg" alt="Contribution">
    </a>
</p>

## Introduction

A minimal Next.js starter with [Tailwind CSS v4][tailwindcss] and [TypeScript][typescript].
You can deploy this project to [Cloudflare Workers][cf-workers] as a fast and scalable hosting
alternative to [Vercel][vercel] by enabling the [OpenNext][open-next] feature. This bare-bones
Next.js template provides a solid foundation for building modern web applications with ease.

**Explore the Demos:**

- Vercel: <https://next-start.vercel.app>
- Cloudflare Workers: <https://next-start.airis.workers.dev>
<!-- - Deno Deploy: <https://next-start.deno.dev> -->

## Quick Start

### Installation

**Using `tiged` (recomended):**

```sh
pnpm dlx tiged riipandi/next-start myapp-name
```

**Using `create-next-app` with pnpm:**

```sh
pnpm create next-app@latest myapp-name --use-pnpm -e https://github.com/riipandi/next-start
```

**Using `create-next-app` with npm:**

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

For detailed explanation on how things work, check out [Next.js docs][nextjs-docs].

- [Next.js app router playground][nextjs-playground] - learn more about Next.js app directory.
- [Dynamic Metadata][nextjs-metadata] - learn more about SEO using dynamic metadata.

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

You need to add `NODE_VERSION` with value `20.19.1` or greater than version 20 on the
environment variables setting. Visit [Cloudflare pages docs][cf-pages] for more information.

For the preview branch:

```env
NEXT_PUBLIC_BASE_URL=${CF_PAGES_URL}
```

## Development

This project uses TypeScript for type checking, [Biome][biome] for code formatting
and linting which is configured in [`biome.json`](./biome.json). It's recommended to get TypeScript
set up for your editor and install an editor plugin (like the [VSCode Biome plugin][biome-vscode])
to get auto-formatting on saving and get a really great in-editor experience with type checking
and auto-complete.

## License

This project is open-sourced software licensed under the [MIT license](./LICENSE).

Copyrights in this project are retained by their contributors.
See the [license file](./LICENSE) for more information.

---

<sub>🤫 Psst! If you like my work you can support me via [GitHub sponsors](https://github.com/sponsors/riipandi).</sub>

<!-- link reference definition -->
[biome]: https://biomejs.dev
[biome-vscode]: https://marketplace.visualstudio.com/items?itemName=biomejs.biome
[cf-pages]: https://developers.cloudflare.com/pages/platform/build-configuration
[cf-workers]: https://workers.cloudflare.com
[nextjs-docs]: https://nextjs.org/docs/getting-started
[nextjs-metadata]: https://nextjs.org/blog/next-13-2#built-in-seo-support-with-new-metadata-api
[nextjs-playground]: https://github.com/vercel/app-playground
[open-next]: https://opennext.js.org/cloudflare
[tailwindcss]: https://tailwindcss.com
[typescript]: https://www.typescriptlang.org
[vercel]: https://vercel.com
