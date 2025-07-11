import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from './breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};
export default meta;

const Example = () => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>/</BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Page</BreadcrumbLink>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);

export const Default: StoryObj<typeof Breadcrumb> = {
  render: () => <div className="p-4"><Example /></div>,
};

