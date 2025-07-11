# Pontoscc UI Kit

Reusable React component library built with Vite, Tailwind and ShadCN pattern.

## Installation

```bash
pnpm add pontoscc-ui
```

## Development

```bash
# Start Vite dev server
pnpm dev

# Preview components with Storybook
pnpm storybook
```

## Building Library

```bash
pnpm build
```

## Building Documentation

```bash
pnpm build:storybook
```

The documentation site is automatically deployed to **GitHub Pages** from the `gh-pages` branch using the provided workflow.

## Theming Example

```jsx
<div data-ui-context="wallet" className="bg-background text-foreground">
  <section className="bg-hero text-hero-foreground p-8">
    <h1 className="text-4xl font-bold">Wallet Dashboard</h1>
  </section>
  <button className="bg-primary text-white hover:bg-primary/90">Transfer</button>
</div>
```
