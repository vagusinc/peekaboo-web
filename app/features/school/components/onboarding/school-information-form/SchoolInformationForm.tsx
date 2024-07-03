import { z } from "zod";
import { useSchoolInformationForm } from "./hooks/useSchoolInformationForm";
import { FormField, TextAreaField } from "~/shared/components/";

export function OnboardingForm1() {
  const { form, handleSubmit } = useSchoolInformationForm();

  return (
    <div className="div-flex-col items-center h-full">
      <div className="w-5/12 h-full">
        <h1 className="text-5xl font-semibold m-5">
          Complete school information
        </h1>

        <div className="h-5/6 centered-div">

          <form className="div-flex-col h-fit w-full" onSubmit={handleSubmit}>
            <form.Field
              name="schoolName"
              validators={{
                onSubmit: z
                  .string()
                  .min(1, { message: "School name is required" }),
              }}
            >
              {(field) => (
                <div className="div-flex-col mb-3">

                  <FormField
                    label="School Name*"
                    classNameLabel="text-md"
                    name={field.name}
                    value={field.state.value}
                    placeholder={"enter school name"}
                    onChange={(e) => field.handleChange(e.target.value)}
                    errorMessage={field.state.meta.errors.join(", ")}
                  />

                </div>
              )}
            </form.Field>

            <form.Field
              name="schoolDescription"
              validators={{
                onSubmit: z
                  .string()
                  .min(1, { message: "School description is required " })
              }}
            >
              {(field) => (
                <div className="div-flex-col mb-3">
                  <TextAreaField
                    label="School description*"
                    classNameLabel="text-md"
                    name={field.name}
                    value={field.state.value}
                    placeholder={"enter school description"}
                    onChange={(e) => field.handleChange(e.target.value)}
                    errorMessage={field.state.meta.errors.join(", ")}
                  />
                </div>
              )}
            </form.Field>

            <div className="div-flex-row space-x-5 mb-3">
              <form.Field
                name="websiteLink">
                {(field) => (
                  <div className="div-flex-col w-6/12">
                    <FormField
                      label="Website"
                      classNameLabel="text-md"
                      name={field.name}
                      value={field.state.value}
                      placeholder={"enter website link"}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </div>
                )}
              </form.Field>

              <form.Field
                name="emailAddress"
                validators={{
                  onSubmit: z
                    .string()
                    .email("Invalid email")
                    .min(1, { message: "This field is required" }),
                }}
              >
                {(field) => (
                  <div className="div-flex-col w-6/12">
                    <FormField
                      label="Email address*"
                      classNameLabel="text-md"
                      name={field.name}
                      value={field.state.value}
                      placeholder={"enter email address"}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </div>
                )}
              </form.Field>
            </div>

            <div className="div-flex-row space-x-5 mb-3">
              <form.Field
                name="contactNumber"
                validators={{
                  onSubmit: z.string()
                  .min(1, { message: "Contact number is required" })
                  .regex(/^\d{11}$/, { message: "Contact number must be 11 digits long" }),
                }}
                >
                {(field) => (
                  <div className="div-flex-col w-6/12">
                    <FormField
                      label="Contact number*"
                      classNameLabel="text-md"
                      name={field.name}
                      value={field.state.value}
                      placeholder={"enter contact number"}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </div>
                )}
              </form.Field>

              <form.Field
                name="socialMediaLink">
                {(field) => (
                  <div className="div-flex-col w-6/12">
                    <FormField
                      label="Social media link"
                      classNameLabel="text-md"
                      name={field.name}
                      value={field.state.value}
                      placeholder={"enter social media link"}
                      onChange={(e) => field.handleChange(e.target.value)}
                    /> 
                  </div>
                )}
              </form.Field>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

