This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Some considerations

- The API key was relocated in .env. Since the app won't run without it, the gitignore has been edited to allow the file. Doing so is a known malpractice, but was done for the sake of the app to work properly.
- Since using the free version of Open Weather Map, some workarounds were made to calculate the forecast. 