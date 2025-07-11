import type { Meta, StoryObj } from '@storybook/react-vite';
import { Form } from './form';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
};
export default meta;

const Example = () => {
  const form = useForm();

  return (
    <Form {...form}>
      <div>Form content here</div>
    </Form>
  );
};

export const Default: StoryObj<typeof Form> = {
  render: () => <div className="p-4"><Example /></div>,
};

