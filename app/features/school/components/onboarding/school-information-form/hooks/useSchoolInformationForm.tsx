import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";

const defaultValues = {
  schoolName: "",
  schoolDescription: "",
  contactNumber: "",
  emailAddress: "",
  websiteLink: "",
  socialMediaLink: "",
};

const useSchoolInformationForm = () => {
  const form = useForm({
    defaultValues,
    onSubmit: async ({ value }) => {
      console.log(value);
    },
    validatorAdapter: zodValidator(),
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  }

  return {
    form,
    handleSubmit,
  };
};

export { useSchoolInformationForm };