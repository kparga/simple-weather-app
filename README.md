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

## Features

- Refresh button at the bottom 
- Basic testing and ESLint
- Responsive design

## Some considerations

- The API key was relocated in .env. Since the app won't run without it, the gitignore has been edited to allow the file. Doing so is a known malpractice, but was done for the sake of the app to work properly.
- The sumarizedWeek function computes a min_temp and max_temp for each day, since the values provided by the 5-day weather forecast API are just for the current moment and not for the whole day, as stated in https://openweathermap.org/forecast5#min

## TO-DO

- More in-depth testing
- Bonus challenge
- Docker implementation