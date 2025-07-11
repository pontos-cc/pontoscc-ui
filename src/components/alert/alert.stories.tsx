import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
};
export default meta;

export const Default: StoryObj<typeof Alert> = {
  render: () => (
    <div className="p-4">
      <Alert>This is an alert</Alert>
    </div>
  ),
};

export const Destructive: StoryObj<typeof Alert> = {
  render: () => (
    <div className="p-4">
      <Alert variant="destructive">Danger!</Alert>
    </div>
  ),
};

