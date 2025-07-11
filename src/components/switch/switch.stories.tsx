import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
};
export default meta;

const Example = () => <Switch />;

export const Default: StoryObj<typeof Switch> = {
  render: () => <div className="p-4"><Example /></div>,
};

