import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
};
export default meta;

const Example = () => <Toggle>Toggle</Toggle>;

export const Default: StoryObj<typeof Toggle> = {
  render: () => <div className="p-4"><Example /></div>,
};

