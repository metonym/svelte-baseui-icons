# svelte-baseui-icons

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Uber Base UI SVG icons as Svelte components.

This library builds icons from [Uber Base Web](https://github.com/uber/baseweb) as Svelte components with zero dependencies.

## Install

```bash
yarn add -D svelte-baseui-icons
# OR
npm i -D svelte-baseui-icons
```

## Usage

```svelte
<script>
  import { Alert, ArrowDown, Filter } from "svelte-baseui-icons";
</script>

<Alert width={24} />
<ArrowDown width={24} />
<Filter width={24} />
```

Refer to [ICON_INDEX.md](ICON_INDEX.md) for a full list of icons.

## API

`$$restProps` are forwarded to the `svg` element.

### Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:keydown

## Rendering using `svelte:component`

```svelte
<script>
  import * as icons from "svelte-baseui-icons";
</script>

{#each Object.keys(icons) as icon}
  <div>
    <svelte:component title="{icon}" this={icons[icon]} width={24} />
    {icon}
  </div>
{/each}
```

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-baseui-icons.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-baseui-icons
[build]: https://travis-ci.com/metonym/svelte-baseui-icons.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-baseui-icons
