<p align="center"><img src="./public/images/banner.svg" width="500" height="150" alt="Project Logo"></p>
<p align="center">
    <a href="https://github.com/riipandi/next-start/pulse">
        <img src="https://img.shields.io/badge/Contributions-welcome-blue.svg?style=flat-square" alt="Contribution welcome">
    </a>
    <a href="https://github.com/riipandi/next-start">
        <img src="https://img.shields.io/github/languages/top/riipandi/next-start?style=flat-square" alt="Top language">
    </a>
    <a href="https://aris.mit-license.org">
        <img src="https://img.shields.io/github/license/riipandi/next-start?style=flat-square" alt="License">
    </a>
    <a href="https://github.com/sponsors/riipandi">
        <img src="https://badgen.net/badge/icon/sponsors?icon=github&label&color=green&labelColor=black&style=flat-square" alt="Sponsor" />
    </a>
</p>

## Introduction

A starter project for [Next.js](https://nextjs.org/) with [Tailwind CSS](https://tailwindcss.com)
and [Typescript](https://www.typescriptlang.org/). This starter kit already pre-configured
with [absolute import](https://jsdev.org/env/nodejs/absolute-path-imports/),
[TailwindUI](https://tailwindui.com), [Framer Motion](https://www.framer.com/motion/),
and some [other goodies](./package.json). This starter also provides [Dockerfile](./Dockerfile), just in case you want to
deploy using containerization or even Kubernetes.

## Quick Start

### Installation

```bash
# Using Yarn is recomended
npx create-next-app myapp-name -e "https://github.com/riipandi/next-start"

# If you want to use npm instead
npx create-next-app myapp-name --use-npm -e "https://github.com/riipandi/next-start"
```

> Don't forget to change `myapp-name` with your real application name.

### Up and Running

| NPM             | Yarn         | PNPM           | Description              |
| --------------- | ------------ | -------------- | ------------------------ |
| `npm install`   | `yarn`       | `pnpm install` | install the dependencies |
| `npm run dev`   | `yarn dev`   | `pnpm dev`     | serve with hot reload    |
| `npm run build` | `yarn build` | `pnpm build`   | build for production     |
| `npm run start` | `yarn start` | `pnpm start`   | launch generated build   |

Application will run at `http://localhost:3000`

For detailed explanation on how things work, check out [Next.js docs](https://nextjs.org/docs/getting-started).

### Build Docker Container

```sh
# Build Docker image
docker build -t next-start:$(cat package.json | jq -r .version) -t next-start:latest .

# Run Docker container in background
docker run --rm -d -p 3000:3000 --name next-start next-start:latest

# Access container shell
docker run --rm -it --entrypoint sh next-start:latest
```

## Deploy your own

You'll want to fork this repository and deploy your own Next.js website. Once you have an
image generator that sparks joy, you can setup [automatic GitHub](https://vercel.com/github)
deployments so that pushing to master will deploy to production! 🚀

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/riipandi/next-start&project-name=next-start&repo-name=next-start&env=NEXT_PUBLIC_SITE_URL,NEXT_PUBLIC_MAINTENANCE_MODE)

#### Vercel Configuration (optional)

If you are using monorepo you will need to configure a few things:

-   Settings -> General -> Root Directory : `apps/web/`
-   Settings -> Git -> Ignored Build Step : `git diff --quiet HEAD^ HEAD ./`

#### Cloudflare Deployment

You need to add `NODE_VERSION` with value `14.19.0` or `16.15.0` on the environment variables setting.
Visit [Cloudflare pages docs](https://developers.cloudflare.com/pages/platform/build-configuration/)
for more information.

For the preview branch:

```env
NEXT_PUBLIC_SITE_URL=${CF_PAGES_URL}
```

## Thanks to...

In general, I'd like to thank every single one who open-sources their
source code for their effort to contribute something to the open-source
community. Your work means the world! 🌍 ❤️

## License

This project is open-sourced software licensed under the [MIT license](./LICENSE).

Copyrights in this project are retained by their contributors.
See the [license file](./LICENSE) for more information.

---

<sub>🤫 Psst! If you like my work you can support me via [GitHub sponsors](https://github.com/sponsors/riipandi).</sub>
