import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollArea } from './scroll-area';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
};
export default meta;

const Example = () => (
  <ScrollArea className="h-32 w-40 border">
    <div className="h-64">Content</div>
  </ScrollArea>
);

export const Default: StoryObj<typeof ScrollArea> = {
  render: () => <div className="p-4"><Example /></div>,
};

