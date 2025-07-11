import type { Meta, StoryObj } from '@storybook/react-vite';
import { Calendar } from './calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
};
export default meta;

const Example = () => <Calendar />;

export const Default: StoryObj<typeof Calendar> = {
  render: () => <div className="p-4"><Example /></div>,
};

