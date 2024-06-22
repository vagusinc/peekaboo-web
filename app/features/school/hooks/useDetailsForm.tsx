import { useForm } from "@tanstack/react-form";

interface DetailsFormValues {
  schoolName: string;
  schoolDescription: string;
  contactNumber: string;
  emailAddress: string;
  websiteLink: string;
  socialMediaLink: string;
}

export function useDetailsForm(defaultValues: DetailsFormValues) {
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