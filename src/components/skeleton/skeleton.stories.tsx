import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
};
export default meta;

const Example = () => <Skeleton className="h-4 w-40" />;

export const Default: StoryObj<typeof Skeleton> = {
  render: () => <div className="p-4"><Example /></div>,
};

