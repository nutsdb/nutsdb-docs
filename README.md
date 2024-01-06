# NutsDB Documents

> This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator. This `README` file may not be detailed enough, so we can find more details on the doc site of Docusaurus. Certainly, welcome to submit a new issue.

## How to run locally

This repo is using `node` and `docusaurus`. So we must install a node (`>= 18`) firstly.

1. Use `yarn install` to install all dependencies of this repo.
2. Use `yarn start` to start docs site locally

## How to create a page of documents

1. Create a `.md` file in `./docs` or in the child directories of `./docs`, name it with a related filename.
2. Open `./sidebar.ts`. This is a file used to define the sidebar structure. Now we use a manual sidebar configure. Find a correct position in `sidebars->tutorialSidebar` of `./sidebar.ts` and add the corresponding records.
3. Writing something in created file.

## How to create a blog

1. Just like creating a page of documents. Create a `.md` file in `./blogs`.
2. No need to update `./sidebar.ts` and we can write something in the created file.

## How to create a document/blog in multi-language

Now we support Chinese and English. If we want to create a Chinese page, we can directly add it in `./docs` or `./blogs`.

If we want to add an English translation, we need add a new file to `./i18n/en/docusaurus-plugin-content-docs/current` or `./i18n/en/docusaurus-plugin-content-blogs/current`. We can keep the same directory structure with the `./docs` and `./blogs` in these English file directories.

## Something more

### Use `go` as the language block name

If we want to display highlighted code, we need use `go` but `golang` as the language block name. Because `Docusaurus` seems only support `go`.

Just like:

> \`\`\`go
