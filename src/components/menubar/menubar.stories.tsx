import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from './menubar';

const meta: Meta<typeof Menubar> = {
  title: 'Components/Menubar',
  component: Menubar,
};
export default meta;

const Example = () => (
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>Menu</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Item</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);

export const Default: StoryObj<typeof Menubar> = {
  render: () => <div className="p-4"><Example /></div>,
};

