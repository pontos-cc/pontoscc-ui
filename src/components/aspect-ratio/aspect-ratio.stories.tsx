import type { Meta, StoryObj } from '@storybook/react-vite';
import { AspectRatio } from './aspect-ratio';

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
};
export default meta;

const Example = () => (
  <AspectRatio ratio={16 / 9} className="bg-muted" />
);

export const Default: StoryObj<typeof AspectRatio> = {
  render: () => <div className="p-4"><Example /></div>,
};

