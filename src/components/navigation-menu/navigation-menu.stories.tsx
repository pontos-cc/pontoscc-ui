import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from './navigation-menu';

const meta: Meta<typeof NavigationMenu> = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
};
export default meta;

const Example = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink href="#">Link</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

export const Default: StoryObj<typeof NavigationMenu> = {
  render: () => <div className="p-4"><Example /></div>,
};

