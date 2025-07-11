import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from './context-menu';

const meta: Meta<typeof ContextMenu> = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
};
export default meta;

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger asChild>
      <button className="border px-3 py-1">Right click</button>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Item One</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export const Default: StoryObj<typeof ContextMenu> = {
  render: () => <div className="p-4"><Example /></div>,
};

