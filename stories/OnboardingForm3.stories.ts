import type { Meta, StoryObj } from "@storybook/react";
import { OnboardingForm3 } from "~/features/school/components/onboarding/OnboardingForm3";

const meta: Meta<typeof OnboardingForm3> = {
  title: 'Forms/OnboardingForm3',
  component: OnboardingForm3,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OnboardingForm3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};