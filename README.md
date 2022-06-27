# Xero Theme (Next.js and WordPress)

A statically generated Xero blog website. This uses a custom Next.js and Wordpress CMS as backend. 

## Author

[Darwin Jerome](darwinjerome@gmail.com)

### Stack

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [WordPress](https://wordpress.org/download/)
- [PHP-CLI](https://www.php.net/manual/en/features.commandline.php)
- [Tailwind.CSS](https://tailwindcss.com/)
- [WPGraphQL](https://www.wpgraphql.com/)

#### GraphiQL

The [WPGraphQL](https://www.wpgraphql.com/) plugin also gives you access to a GraphQL IDE directly from your WordPress Admin, allowing you to inspect and play around with the GraphQL API.


### Update env variable
Open `.env.local` and set `WORDPRESS_API_URL` to be the URL to your GraphQL endpoint in WordPress. For example: `https://myapp.wpengine.com/graphql`.

Your `.env.local` file should look like this:

```bash
WORDPRESS_API_URL=...

# Only required if you want to enable preview mode
# WORDPRESS_AUTH_REFRESH_TOKEN=
# WORDPRESS_PREVIEW_SECRET=
```

## How to run

Execute [`npm run dev`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npm run dev
```
OR prod build
```bash
npm run build
```


