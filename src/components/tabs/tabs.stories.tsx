import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
};
export default meta;

export const Default: StoryObj<typeof Tabs> = {
  render: () => (
    <div className="p-4">
      <Tabs defaultValue="one" className="w-[300px]">
        <TabsList>
          <TabsTrigger value="one">One</TabsTrigger>
          <TabsTrigger value="two">Two</TabsTrigger>
        </TabsList>
        <TabsContent value="one">First tab</TabsContent>
        <TabsContent value="two">Second tab</TabsContent>
      </Tabs>
    </div>
  ),
};

