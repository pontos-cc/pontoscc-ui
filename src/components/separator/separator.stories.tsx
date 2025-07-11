import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
};
export default meta;

const Example = () => <Separator className="my-2" />;

export const Default: StoryObj<typeof Separator> = {
  render: () => <div className="p-4"><Example /></div>,
};

