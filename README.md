This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

In order to run the tests, run the below command:

```bash
npm run test
# or
yarn test
```

You can build the project by running: 

```bash
npm run build
# or
yarn build
```
## About Project

It's a recipe website developed as the frontend test for Conker company.

For your convenience, the project has been deployed to https://conker-frontend.vercel.app/ using vercel.

Although it was not necessary to create APIs, I developed two endpoints to make it more professional. The first one is for fetching all recipes (`api/recipes/`), and the second one is for fetching one specific recipe (`api/recipes/[id]`).


I also implemented search, include, and exclude queries to filter recipes' responses based on the filtered values received from the user.

Hope you enjoy working with it :)
