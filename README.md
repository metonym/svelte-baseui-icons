# svelte-baseui-icons

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Uber Base UI SVG icons as Svelte components.

This library builds icons from [Uber Base Web](https://github.com/uber/baseweb) as Svelte components with zero dependencies.

## Install

```bash
yarn add -D svelte-baseui-icons
```

## Usage

```html
<script>
  import { Alert } from "svelte-baseui-icons";
</script>

<Alert />
```

Refer to [docs/README.md](docs/README.md) for a full list of icons.

## API

`$$restProps` are forwarded to the `svg` element.

### Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:keydown

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-baseui-icons.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-baseui-icons
[build]: https://travis-ci.com/metonym/svelte-baseui-icons.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-baseui-icons
