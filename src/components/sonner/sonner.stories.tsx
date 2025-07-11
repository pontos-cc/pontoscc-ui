import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toaster, toast } from './sonner';
import { Button } from '../button/button';

const meta: Meta<typeof Toaster> = {
  title: 'Components/Sonner',
  component: Toaster,
};
export default meta;

const Example = () => (
  <div>
    <Button onClick={() => toast('Toast message')}>Toast</Button>
    <Toaster />
  </div>
);

export const Default: StoryObj<typeof Toaster> = {
  render: () => <div className="p-4"><Example /></div>,
};

