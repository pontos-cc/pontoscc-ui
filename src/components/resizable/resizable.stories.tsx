import type { Meta, StoryObj } from '@storybook/react-vite';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './resizable';

const meta: Meta<typeof ResizablePanelGroup> = {
  title: 'Components/Resizable',
  component: ResizablePanelGroup,
};
export default meta;

const Example = () => (
  <ResizablePanelGroup direction='horizontal' className="w-64 h-32 border">
    <ResizablePanel defaultSize={50}>One</ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize={50}>Two</ResizablePanel>
  </ResizablePanelGroup>
);

export const Default: StoryObj<typeof ResizablePanelGroup> = {
  render: () => <div className="p-4"><Example /></div>,
};

