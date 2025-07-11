import type { Meta, StoryObj } from '@storybook/react-vite';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './collapsible';
import { Button } from '../button/button';

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Collapsible',
  component: Collapsible,
};
export default meta;

const Example = () => (
  <Collapsible>
    <CollapsibleTrigger asChild>
      <Button>Toggle</Button>
    </CollapsibleTrigger>
    <CollapsibleContent className="mt-2">Hidden content</CollapsibleContent>
  </Collapsible>
);

export const Default: StoryObj<typeof Collapsible> = {
  render: () => <div className="p-4"><Example /></div>,
};

