import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
};
export default meta;

const Example = () => <Textarea placeholder="Type" />;

export const Default: StoryObj<typeof Textarea> = {
  render: () => <div className="p-4"><Example /></div>,
};

