import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sheet, SheetTrigger, SheetContent } from './sheet';
import { Button } from '../button/button';

const meta: Meta<typeof Sheet> = {
  title: 'Components/Sheet',
  component: Sheet,
};
export default meta;

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button>Open</Button>
    </SheetTrigger>
    <SheetContent side="right" className="p-4">
      Content
    </SheetContent>
  </Sheet>
);

export const Default: StoryObj<typeof Sheet> = {
  render: () => <div className="p-4"><Example /></div>,
};

