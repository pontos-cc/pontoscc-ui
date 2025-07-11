import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toaster } from './toaster';

const meta: Meta<typeof Toaster> = {
  title: 'Components/Toaster',
  component: Toaster,
};
export default meta;

export const Default: StoryObj<typeof Toaster> = {
  render: () => <div className="p-4"><Toaster /></div>,
};

