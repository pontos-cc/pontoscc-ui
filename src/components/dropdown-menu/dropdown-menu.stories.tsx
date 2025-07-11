import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './dropdown-menu';
import { Button } from '../button/button';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
};
export default meta;

const Example = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button>Open</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Item</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export const Default: StoryObj<typeof DropdownMenu> = {
  render: () => <div className="p-4"><Example /></div>,
};

