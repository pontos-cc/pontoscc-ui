import type { Meta, StoryObj } from '@storybook/react-vite';
import { Command, CommandInput, CommandList, CommandItem } from './command';

const meta: Meta<typeof Command> = {
  title: 'Components/Command',
  component: Command,
};
export default meta;

const Example = () => (
  <Command className="border">
    <CommandInput placeholder="Search" />
    <CommandList>
      <CommandItem>Item One</CommandItem>
      <CommandItem>Item Two</CommandItem>
    </CommandList>
  </Command>
);

export const Default: StoryObj<typeof Command> = {
  render: () => <div className="p-4"><Example /></div>,
};

