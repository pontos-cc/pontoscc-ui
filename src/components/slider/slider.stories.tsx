import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
};
export default meta;

export const Default: StoryObj<typeof Slider> = {
  render: () => (
    <div className="p-4">
      <Slider defaultValue={[50]} className="w-64" />
    </div>
  ),
};

