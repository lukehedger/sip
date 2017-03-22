# Sip 🍹

> Small sips of CSS

- [Try Sip out on RunKit](https://runkit.com/lukehedger/58d2583741f5d300146c47ed)

## Install

```
yarn add sip-css
```

## Sip?

Sip takes micro styles and outputs real CSS:
```
Sip({ m:4 }) // ↣ { margin: 12px }
```

This can be used on components:
```
<Component sip={{ m:4 }} />
```

And processed with any CSS-in-JS implementation or simple inline styles:
```
import Sip from 'sip-css'

const Component = ({ sip }) => <div style={{ ...Sip(sip) }} />
```

## Paradigm

CSS at scale === 😫. And scoping your styles to components isn't enough. You still end up with styles tightly coupled to logic. By enforcing an architecture that exposes only a minimal set of presentational components this coupling disappears. These primitive components (Button, Text, View and co) can then be fine-tuned when used by other functional components. `Sip` enables this through the use of atomic-like styles.

## Refreshment

- Framework-agnostic - just outputs CSS objects
- Component library and style-guide compatible
- Designed to work with a central set of reusable, presentational components
- Enables any level of application logic refactoring without losing design! And vice-versa.

## Roadmap

- [x] Tests
- [ ] Examples
- [ ] Support media queries
- [ ] Add camelCase output option

## Contributing

### Setup
```
yarn
```

### Build
```
yarn build
```

### Test
```
yarn test
```
