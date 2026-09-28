# Paradise Nursery

A React and Redux Toolkit houseplant shop with a landing page, three categories of six plants each, product listing, and working shopping cart.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Create a **public** GitHub repository and upload this project's files, including `src` and `package.json`.
2. In repository **Settings → Pages**, choose **GitHub Actions** as the source.
3. Add the workflow in `.github/workflows/deploy.yml` to your repository and push to `main`.
4. Wait for the Actions workflow to complete, then open the Pages URL shown in Settings → Pages.

Vite uses a relative base path (`./`) so the built assets work at a GitHub Pages project URL. The app uses in-memory Redux state and resets on a full page reload. Plant photos require an internet connection.
