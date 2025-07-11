import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
};
export default meta;

export const Default: StoryObj<typeof Tooltip> = {
  render: () => (
    <div className="p-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="border px-3 py-1">Hover me</button>
          </TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
};

