import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};
export default meta;

export const Default: StoryObj<typeof Button> = {
  render: () => (
    <div className="p-4">
      <Button>Default</Button>
    </div>
  ),
};

export const Variants: StoryObj<typeof Button> = {
  render: () => (
    <div className="flex flex-col gap-2 p-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: StoryObj<typeof Button> = {
  render: () => (
    <div className="flex flex-col gap-2 p-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">Icon</Button>
    </div>
  ),
};

export const Disabled: StoryObj<typeof Button> = {
  render: () => (
    <div className="p-4">
      <Button disabled>Disabled</Button>
    </div>
  ),
};

