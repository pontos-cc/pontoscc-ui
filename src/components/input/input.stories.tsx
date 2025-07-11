import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
};
export default meta;

export const Default: StoryObj<typeof Input> = {
  render: () => (
    <div className="p-4">
      <Input placeholder="Type here" />
    </div>
  ),
};

export const Disabled: StoryObj<typeof Input> = {
  render: () => (
    <div className="p-4">
      <Input disabled placeholder="Disabled" />
    </div>
  ),
};

