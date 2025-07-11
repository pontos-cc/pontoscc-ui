import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from './alert-dialog';
import { Button } from '../button/button';

const meta: Meta<typeof AlertDialog> = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
};
export default meta;

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>Action cannot be undone</AlertDialogDescription>
      </AlertDialogHeader>
      <div className="flex justify-end gap-2">
        <AlertDialogCancel asChild>
          <Button variant="secondary">Cancel</Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button variant="destructive">Ok</Button>
        </AlertDialogAction>
      </div>
    </AlertDialogContent>
  </AlertDialog>
);

export const Default: StoryObj<typeof AlertDialog> = {
  render: () => <div className="p-4"><Example /></div>,
};

