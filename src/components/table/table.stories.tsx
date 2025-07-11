import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from './table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};
export default meta;

const Example = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Header</TableHead>
        <TableHead>Header</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const Default: StoryObj<typeof Table> = {
  render: () => <div className="p-4"><Example /></div>,
};

