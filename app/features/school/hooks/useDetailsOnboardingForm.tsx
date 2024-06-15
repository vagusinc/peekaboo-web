import { useForm } from "@tanstack/react-form";

interface OnboardingFormValues {
  schoolName: string;
  schoolDescription: string;
  contactNumber: string;
  emailAddress: string;
  websiteLink: string;
  socialMediaLink: string;
}

export function useDetailsOnboardingForm(defaultValues: OnboardingFormValues) {
  return useForm({
    defaultValues,
    onSubmit: ({ value }) => {
      console.log(
        value.schoolName,
        value.schoolDescription,
        value.contactNumber,
        value.emailAddress,
        value.websiteLink,
        value.socialMediaLink
      );
    },
  });
}