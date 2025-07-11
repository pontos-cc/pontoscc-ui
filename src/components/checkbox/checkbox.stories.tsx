import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
};
export default meta;

export const Default: StoryObj<typeof Checkbox> = {
  render: () => (
    <div className="p-4">
      <Checkbox />
    </div>
  ),
};

export const Disabled: StoryObj<typeof Checkbox> = {
  render: () => (
    <div className="p-4">
      <Checkbox disabled />
    </div>
  ),
};

