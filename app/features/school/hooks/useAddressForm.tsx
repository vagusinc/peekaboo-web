import { useForm } from "@tanstack/react-form";

interface AddressFormValues {
  address: string;
  street: string;
  city: string;
  zip: string;
}

export function useAddressForm(defaultValues: AddressFormValues) {
  return useForm({
    defaultValues,
    onSubmit: ({ value }) => {
      console.log(
        value.address,
        value.street,
        value.city,
        value.zip,
      );
    },
  });
}