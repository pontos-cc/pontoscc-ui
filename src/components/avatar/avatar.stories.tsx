import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
};
export default meta;

export const Default: StoryObj<typeof Avatar> = {
  render: () => (
    <div className="p-4">
      <Avatar>
        <AvatarImage src="https://placekitten.com/200/200" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  ),
};

