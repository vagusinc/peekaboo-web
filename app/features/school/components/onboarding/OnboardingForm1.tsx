import { Form } from "@remix-run/react";
import { useForm } from "@tanstack/react-form";
import { Input } from "stories/Input";

export function OnboardingForm1() {
  const form = useForm({
    defaultValues: {
      schoolName: "",
      schoolDescription: "",
      contactNumber: "",
      emailAddress: "",
      websiteLink: "",
      socialMediaLink: "",
    },
    onSubmit: ({ value }) => {
      console.log(value.schoolName, value.schoolDescription, value.contactNumber, value.emailAddress, value.websiteLink, value.socialMediaLink);
    },
  });

  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="flex flex-col items-center w-5/12">
        <h1 className="text-5xl font-semibold m-5">
          Complete school information
        </h1>

        <Form
          className="flex flex-col h-4/5 w-full"
          onSubmit={e => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <form.Field
            name="schoolName">
            {(field) => (
              <div className="div-flex-col mb-3">
                <label htmlFor="school-name"> School name </label>
                <Input
                  className="custom-input mt-1.5"
                  id="school-name"
                  placeholder="enter school name"
                  type="text"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>

          <form.Field
            name="schoolDescription">
            {(field) => (
              <div className="div-flex-col mb-3">
                <label htmlFor="school-description"> School description </label>
                <textarea
                  className="custom-input mt-1.5 min-h-20"
                  id="school-name"
                  placeholder="enter school description"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>

          <div className="div-flex-row space-x-5 mb-3">
            <form.Field
              name="contactNumber">
              {(field) => (
                <div className="div-flex-col w-6/12">
                  <label htmlFor="contact-number"> Contact number </label>
                  <Input
                    className="custom-input mt-1.5"
                    id="contact-number"
                    placeholder="enter contact number"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>

            <form.Field
              name="emailAddress">
              {(field) => (
                <div className="div-flex-col w-6/12">
                  <label htmlFor="email-address"> Email address </label>
                  <Input
                    className="custom-input mt-1.5"
                    id="email-address"
                    placeholder="enter email address"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>
          </div>

          <div className="div-flex-row space-x-5 mb-3">
            <form.Field
              name="websiteLink">
              {(field) => (
                <div className="div-flex-col w-6/12">
                  <label htmlFor="website-link"> Website </label>
                  <Input
                    className="custom-input mt-1.5"
                    id="website-link"
                    placeholder="enter website link"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>

            <form.Field
              name="socialMediaLink">
              {(field) => (
                <div className="div-flex-col w-6/12">
                  <label htmlFor="social-media-link"> Social media link </label>
                  <Input
                    className="custom-input mt-1.5"
                    id="social-media-link"
                    placeholder="enter social media link"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>
          </div>

        </Form>
      </div>
    </div>
  );
}

