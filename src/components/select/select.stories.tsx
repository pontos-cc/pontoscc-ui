import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
};
export default meta;

export const Default: StoryObj<typeof Select> = {
  render: () => (
    <div className="p-4">
      <Select defaultValue="one">
        <SelectTrigger className="w-40">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="one">One</SelectItem>
          <SelectItem value="two">Two</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

