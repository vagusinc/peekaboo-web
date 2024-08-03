import { FormField } from "~/shared/components";
import { useLoginForm } from "./hooks/useLoginForm";
import { Button, Typography } from "~/shared/components/base";
import { z } from "zod";

const LoginForm = () => {
  const { form, handleSubmit } = useLoginForm();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <form.Field
        name="email"
        validators={{
          onSubmit: z
            .string()
            .email("Invalid email")
            .min(1, { message: "This field is required" }),
        }}
      >
        {(field) => {
          return (
            <FormField
              label="Email"
              name={field.name}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              errorMessage={field.state.meta.errors.join(", ")}
            />
          );
        }}
      </form.Field>

      <form.Field
        name="password"
        validators={{
          onSubmit: z
            .string()
            .min(1, { message: "This field is required" })
            .min(8, { message: "Password must be at least 8 characters." }),
        }}
      >
        {(field) => {
          return (
            <FormField
              type="password"
              label="Password"
              name={field.name}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              errorMessage={field.state.meta.errors.join(", ")}
            />
          );
        }}
      </form.Field>

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {() => {
          return (
            <div className="flex flex-col gap-1">
              <Button variant="submit" type="submit">
                Submit
              </Button>
              <Typography className="underline">forgot password?</Typography>
            </div>
          );
        }}
      </form.Subscribe>
    </form>
  );
};

export { LoginForm };
