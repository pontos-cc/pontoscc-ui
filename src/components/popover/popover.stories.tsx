import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover, PopoverTrigger, PopoverContent } from './popover';
import { Button } from '../button/button';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
};
export default meta;

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button>Open</Button>
    </PopoverTrigger>
    <PopoverContent className="p-2">Content</PopoverContent>
  </Popover>
);

export const Default: StoryObj<typeof Popover> = {
  render: () => <div className="p-4"><Example /></div>,
};

