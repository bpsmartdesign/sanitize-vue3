# sanitize-vue3

A simple component to sanitize and parse HTML for Vue.js 3 - Vite - Ts apps.

[![vue-next](https://img.shields.io/badge/vue-next-brightgreen.svg)](https://github.com/vuejs/vue-next) [![npm](https://img.shields.io/npm/v/sanitize-vue3.svg?style=flat-square)](https://npmjs.org/package/sanitize-vue3)

The use of `v-html` if very risky and NOT RECOMMENDED especially when the contents can be sent by the User 😕. You definitely might need to sanitize and parse that content. This plugin is built for Vue 3 - Vite apps and supports TypeScript. It is built upon on [sanitize-html](https://github.com/punkave/sanitize-html).

## Install

```bash
yarn add sanitize-vue3
# or
npm install --save sanitize-vue3
```

## Usage

### Global Usage

Register the component globally

```js
import { SanitizeVue3 } from "sanitize-vue3";

const app = createApp(App); // App should be probably your main App.vue component or something else
app.component("SanitizeVue3", SanitizeVue3);
```

### Local Usage

Use the component locally

```js
import { SanitizeVue3 } from "sanitize-vue3";
```

And use it on template like

```html
<template>
  <SanitizeVue3 html="youHtmlCode" />
</template>
```

## Issues

If you find any bugs, please open an issue.

## Contributing

1. Fork it
2. Create your feature branch: `git checkout -b feature-or-bugfix`
3. Add your changes: `git add files`
4. Commit your changes: `git commit -m "Add some feature"`
5. Push to the branch: `git push origin feature-or-bugfix`
6. Submit a forked pull request

## License

See [License File](LICENSE.md).
