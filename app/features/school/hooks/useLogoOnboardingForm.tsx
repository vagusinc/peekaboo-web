import { useForm } from "@tanstack/react-form";

interface OnboardingFormLogo {
  logoFile: File | null;
}

export function useLogoOnboardingForm(defaultValues: OnboardingFormLogo) {
  return useForm({
    defaultValues,
    onSubmit: ({ value }) => {
      console.log(value.logoFile);
    }
  });
}