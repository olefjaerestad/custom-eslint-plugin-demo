# custom-eslint-plugin-demo
Code used in the presentation/live coding demo "How (and why) do you create a custom ESLint plugin".

## Installation
1. Add a `custom-eslint-plugin` directory in your project root folder
2. Within this directory, create an `index.js` and a `no-single-letter-variable-name.js`. See this repo for their contents.
3. Add the following to your `package.json#devDependencies` (replace `my-plugin` with your plugin name):

```json
"eslint-plugin-my-plugin": "file:./custom-eslint-plugin",
```

4. Run `npm i` (creates the required symlink between node_modules and your plugin files).
5. Optional: If you want to test your plugin, add the following to your `package.json#scripts` (requires Jest):

```json
"test:eslint": "jest -c ./custom-eslint-plugin/jest.config.mjs",
```

6. Add the following to your `.eslintrc.js` (replace `my-plugin` with your plugin name, and `no-single-letter-variable-name` with your rule name):

```js
module.exports = {
    ...
    plugins: [
        ...,
        'my-plugin',
    ],
    rules: {
        ...
        'my-plugin/no-single-letter-variable-name': 'error',
    }
}
```

7. Edit your plugin rules as you see fit.

## Resources
- https://camchenry.com/blog/eslint-custom-rules
- https://stevenpetryk.com/blog/custom-eslint-rules/
- https://www.kenneth-truyers.net/2016/05/27/writing-custom-eslint-rules/
- https://eslint.org/docs/latest/extend/custom-rules
- https://eslint.org/docs/latest/extend/selectors
