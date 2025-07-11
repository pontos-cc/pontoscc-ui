import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChartContainer } from './chart';
import { ResponsiveContainer, LineChart, Line } from 'recharts';

const meta: Meta<typeof ChartContainer> = {
  title: 'Components/Chart',
  component: ChartContainer,
};
export default meta;

const data = [
  { name: 'A', value: 1 },
  { name: 'B', value: 2 },
];

const Example = () => (
  <ChartContainer config={{ value: { color: '#8884d8' } }}>
    <ResponsiveContainer width={200} height={100}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  </ChartContainer>
);

export const Default: StoryObj<typeof ChartContainer> = {
  render: () => <div className="p-4"><Example /></div>,
};

