import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup, RadioGroupItem } from './radio-group';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
};
export default meta;

const Example = () => (
  <RadioGroup defaultValue="1" className="flex flex-col gap-2">
    <label className="flex items-center gap-2">
      <RadioGroupItem value="1" /> One
    </label>
    <label className="flex items-center gap-2">
      <RadioGroupItem value="2" /> Two
    </label>
  </RadioGroup>
);

export const Default: StoryObj<typeof RadioGroup> = {
  render: () => <div className="p-4"><Example /></div>,
};

