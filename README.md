# @greylocklabs/stylelint-config

> Greylock Labs Stylelint rules

---

[![npm version](https://badge.fury.io/js/%40greylocklabs%2Fstylelint-config.svg)](https://badge.fury.io/js/%40greylocklabs%2Fstylelint-config)

## Installation

Install the package and all of its peer dependencies:

```bash
$ npx install-peerdeps --dev @greylocklabs/stylelint-config
```

Afterwards, create a `.stylelintrc` file in your root project folder and add the following:

```json
{
  "extends": "@greylocklabs/stylelint-config"
}
```

## Configuration

To override anything, simply add a `rules` property to your `.stylelintrc`
file and add new or existing rules to it with your preferred settings:

```json
{
  "extends": "@greylocklabs/stylelint-config",
  "rules": {
    "number-leading-zero": null
  }
}
```

## Need to lint Styled Components?

Unfortunately, as of now Stylelint does not support using one config file
to target different file types. If your project uses any of the following:

1. JSX/TSX files using Styled Components
2. Other CSS-in-JS solutions

You should instead install
[@greylocklabs/stylelint-config-styled-components](https://www.npmjs.com/package/@greylocklabs/stylelint-config-styled-components).

Eventually, the goal is to merge the two projects together.

## Testing

Run `yarn test` to run unit tests.

## License

MIT License. See [LICENSE](LICENSE) file for details.
