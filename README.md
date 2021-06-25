# Sample Express Web Server

## Goals

1. Create a Node server using Express
2. Document commands/configuration to allow debugging with initial breakpoint
3. Automated testing of web server testing status codes, headers, and response body

## Setup Steps

1. `git init`
2. Create `.gitignore` with `node_modules` added
2. `npm init`
3. Add `"type": "module"` to `package.json`
4. Add `dependencies` and `devDependencies` to `package.json` in logical order
5. `npm i -D jest eslint env-cmd prettier nodemon`
6. `npx eslint --init`
7. Change lint config to `.eslintrc.cjs` with rule `'import/extensions': 'off',`
8. Configure `test` and `lint` scripts
9. Add `.editorconfig` with the following

```
root = true

[*]
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

```

10. Create `index.js` and `www.js`

