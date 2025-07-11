import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputOTP, InputOTPGroup, InputOTPSlot } from './input-otp';

const meta: Meta<typeof InputOTP> = {
  title: 'Components/InputOtp',
  component: InputOTP,
};
export default meta;

const Example = () => (
  <InputOTP maxLength={4}>
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
    </InputOTPGroup>
  </InputOTP>
);

export const Default: StoryObj<typeof InputOTP> = {
  render: () => <div className="p-4"><Example /></div>,
};

