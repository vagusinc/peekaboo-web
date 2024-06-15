import type { Meta, StoryObj } from "@storybook/react";
import { OnboardingForm1 } from "~/features/school/components/onboarding/OnboardingForm1";

const meta: Meta<typeof OnboardingForm1> = {
  title: 'Forms/OnboardingForm1',
  component: OnboardingForm1,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OnboardingForm1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};