# Setup

Create a directory as the root of the project. `cd` into that directory.

## Configure the [Node Package Manager (npm)](http://npmjs.com)

Install or upgrade npm.

```bash
sudo apt-get install npm
# or
sudo apt-get update && apt-get upgrade
```

Initialize `npm` to generate `package.json`.

```bash
# Optinal -y will select default values 
npm init [-y]
```

## Install [Nodemon](https://nodemon.io/) & [TypeScript](https://www.typescriptlang.org/docs/home.html)

Install `nodemon` and `typescript` as dev dependencies.

```bash
npm i -D nodemon typescript
```

### Configure the TypeScript compiler

Initialize TypeScript with the command [`npx`]() command in order to create a 
[`tsconfig.json`](../tsconfig.json) file.

```bash
npx tsc --init
```

Configure the `tsconfig.json` file as outlined in the [TypeScript React Starter Code](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter).

```bash
{
  "compilerOptions": {
    // ...
    "rootDir": "./src",  
    "outDir": "./build/dist",
    // ...
  },
}
```

# Begin the project
Add an `index.ts` file in a `./src/client/components`.

```bash
touch index.ts
```

Add a `build` script to the `package.json` file created by `npm init`.

```json
{
// ...
  "script": { 
    "build":"./node_modules/.bin/tsc -w",
    "dev": "npm run build & ./node_modules/.bin/nodemon -q ./server/index.js"
  },
//...
}
```
