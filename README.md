# How to use

- clone this repo (`git clone https://gitlab.com/syntax-dev/templates/reactjs.git [project name]`)
- delete .got (`rm -rf .git)
- readd git & setup new origin
  - git init
  - git remote add origin https://gitlab.com/syntax-dev/[SUBGROUP]/[PROJECT].git
  - git add .
  - git commit -m "Initial commit"
  - git push -u origin master

## Things that need changing

1. Remove service worker if you're not using it on that project

- delete `src/serviceWorker.ts`
- remove `serviceWorker.unregister();` and `import * as serviceWorker from "./serviceWorker";` from `src/index.tsx`

2. Update names

- Update project name in `public/index.html`
- Update project name, description and version on `package.json`

3. Remove extra stuff you might not need like `services/api`

## tsconfig options

React overwrites `tsconfig.json` on start, if you wanna change a project specific config, use `tsconfig.overwriter.json`
