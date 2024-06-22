import { Form } from "@remix-run/react";
import { Input } from "stories/Input";
import { useDetailsForm } from "../../hooks/useDetailsForm";

export function OnboardingForm1() {
  const form = useDetailsForm({
    schoolName: "",
    schoolDescription: "",
    contactNumber: "",
    emailAddress: "",
    websiteLink: "",
    socialMediaLink: "",
  });

  return (
    <div className="div-flex-col items-center h-full">
      <div className="w-5/12 h-full">
        <h1 className="text-5xl font-semibold m-5">
          Complete school information
        </h1>

        <div className="h-5/6 centered-div">
          <Form
            className="div-flex-col h-fit w-full"
            onSubmit={e => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <form.Field name="schoolName">
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
                name="websiteLink">
                {(field) => (
                  <div className="div-flex-col w-6/12">
                    <label htmlFor="website-link"> Website </label>
                    <Input
                      className="custom-input mt-1.5"
                      id="website"
                      placeholder="enter website link"
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
    </div>
  );
}

