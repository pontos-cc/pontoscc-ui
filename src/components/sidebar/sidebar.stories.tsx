import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sidebar, SidebarHeader, SidebarMenu, SidebarMenuItem } from './sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
};
export default meta;

const Example = () => (
  <Sidebar>
    <SidebarHeader>Menu</SidebarHeader>
    <SidebarMenu>
      <SidebarMenuItem>Item</SidebarMenuItem>
    </SidebarMenu>
  </Sidebar>
);

export const Default: StoryObj<typeof Sidebar> = {
  render: () => <div className="p-4"><Example /></div>,
};

