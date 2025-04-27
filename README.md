# shadcn-as-polymorphic

Swaps [shadcn/ui](https://github.com/shadcn-ui/ui)'s `asChild` and `Slot` for `as` prop-based polymorphic components.

## Why

`asChild` and `Slot` rely on `React.cloneElement`, which can:

- Degrade performance due to repeated cloning in nested components.
- Complicate code when `asChild` is nested, making debugging harder.
- Cause unpredictable behavior due to limited insight into child components.

## Usage

```tsx
// HTML element
<Button as="a" href="/home">Go to Home</Button>

// Custom component
<Button as={CustomLink} to="/profile">Go to Profile</Button>
```
