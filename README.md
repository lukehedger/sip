<p align='center'>
  <img src='https://cloud.githubusercontent.com/assets/1913316/24197195/9ff384d4-0ef8-11e7-9243-180af29e9988.png' width='200'/>
</p>

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

[Try Sip out on RunKit](https://runkit.com/lukehedger/58d2583741f5d300146c47ed)

## Paradigm

CSS at scale === 😫. And scoping your styles to components isn't enough. You still end up with styles tightly coupled to logic. By enforcing an architecture that exposes only a minimal set of presentational components this coupling disappears. These primitive components (Button, Text, View and co) can then be fine-tuned when used by other functional components. `Sip` enables this through the use of atomic-like styles.

[Read the origin story on Medium!](https://medium.com/@level_out/truly-reusable-css-f9399e66d40a)

## Refreshment

- Framework-agnostic - just outputs CSS objects
- Component library and style-guide compatible
- Designed to work with a central set of reusable, presentational components
- Enables any level of application logic refactoring without losing design! And vice-versa.

[Take a look at the examples](examples/)

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
