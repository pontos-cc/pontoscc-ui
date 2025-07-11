import type { Meta, StoryObj } from '@storybook/react-vite';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './hover-card';

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
};
export default meta;

const Example = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <button className="border px-3 py-1">Hover</button>
    </HoverCardTrigger>
    <HoverCardContent>Card content</HoverCardContent>
  </HoverCard>
);

export const Default: StoryObj<typeof HoverCard> = {
  render: () => <div className="p-4"><Example /></div>,
};

