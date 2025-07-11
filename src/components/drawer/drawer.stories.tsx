import type { Meta, StoryObj } from '@storybook/react-vite';
import { Drawer, DrawerTrigger, DrawerContent } from './drawer';
import { Button } from '../button/button';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
};
export default meta;

const Example = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button>Open</Button>
    </DrawerTrigger>
    <DrawerContent className="p-4">Content</DrawerContent>
  </Drawer>
);

export const Default: StoryObj<typeof Drawer> = {
  render: () => <div className="p-4"><Example /></div>,
};

