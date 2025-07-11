import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToggleGroup, ToggleGroupItem } from './toggle-group';

const meta: Meta<typeof ToggleGroup> = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
};
export default meta;

const Example = () => (
  <ToggleGroup type="multiple" className="flex gap-2">
    <ToggleGroupItem value="1">One</ToggleGroupItem>
    <ToggleGroupItem value="2">Two</ToggleGroupItem>
  </ToggleGroup>
);

export const Default: StoryObj<typeof ToggleGroup> = {
  render: () => <div className="p-4"><Example /></div>,
};

