import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToastProvider, Toast, ToastTitle, ToastDescription } from './toast';
import { Button } from '../button/button';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
};
export default meta;

const Example = () => (
  <ToastProvider>
    <Button>Open</Button>
    <Toast>
      <ToastTitle>Title</ToastTitle>
      <ToastDescription>Description</ToastDescription>
    </Toast>
  </ToastProvider>
);

export const Default: StoryObj<typeof Toast> = {
  render: () => <div className="p-4"><Example /></div>,
};

