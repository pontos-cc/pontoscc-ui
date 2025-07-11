import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
};
export default meta;

const Example = () => <Progress value={50} className="w-64" />;

export const Default: StoryObj<typeof Progress> = {
  render: () => <div className="p-4"><Example /></div>,
};

