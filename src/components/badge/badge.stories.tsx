import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
};
export default meta;

export const Default: StoryObj<typeof Badge> = {
  render: () => (
    <div className="p-4">
      <Badge>Default</Badge>
    </div>
  ),
};

export const Variants: StoryObj<typeof Badge> = {
  render: () => (
    <div className="flex flex-col gap-2 p-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

