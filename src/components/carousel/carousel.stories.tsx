import type { Meta, StoryObj } from '@storybook/react-vite';
import { Carousel } from './carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
};
export default meta;

const slides = [1, 2, 3].map(i => (
  <div key={i} className="h-32 w-48 bg-muted flex items-center justify-center">{`Slide ${i}`}</div>
));

const Example = () => <Carousel className="w-48">{slides}</Carousel>;

export const Default: StoryObj<typeof Carousel> = {
  render: () => <div className="p-4"><Example /></div>,
};

