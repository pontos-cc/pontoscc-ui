import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};
export default meta;

export const Default: StoryObj<typeof Card> = {
  render: () => (
    <div className="p-4">
      <Card className="p-4">Example content</Card>
    </div>
  ),
};

