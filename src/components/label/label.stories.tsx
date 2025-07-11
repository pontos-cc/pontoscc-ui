import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
};
export default meta;

const Example = () => <Label htmlFor="x">Label</Label>;

export const Default: StoryObj<typeof Label> = {
  render: () => <div className="p-4"><Example /></div>,
};

