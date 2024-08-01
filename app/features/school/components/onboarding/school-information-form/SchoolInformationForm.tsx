import { z } from "zod";
import { useSchoolInformationForm } from "./hooks/useSchoolInformationForm";
import { FormField, RichTextEditor } from "~/shared/components/";
import DynamicInputFields from "./DynamicInputFields";
import { useState } from "react";

export function SchoolInformationForm() {
  const { form, handleSubmit } = useSchoolInformationForm();
  const [editorContent, setEditorContent] = useState('');
  const [contactNumber, setContactNumber] = useState<string[]>([]);
  const [socialMediaLinks, setSocialMediaLinks] = useState<string[]>([]);

  const handleSocialMediaLinksChange = (values: string[]) => {
    setSocialMediaLinks(values);
  };

  const handleContactNumberChange = (values: string[]) => {
    setContactNumber(values);
  };

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  return (
    <div className="div-flex-col items-center h-full w-full">
      <div className="w-5/12 h-full space-y-32">
        <h1 className="text-5xl font-semibold m-5">
          Complete school information
        </h1>

        <div className="max-h-[80%]">
          <form className="div-flex-col w-full" onSubmit={handleSubmit}>
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
                  .min(1, { message: "School description is required " }),
              }}
            >
              {() => (
                <div className="div-flex-col mb-3">
                  <RichTextEditor
                    label="Description*"
                    name="description"
                    placeholder="What's your school about?"
                    value={editorContent}
                    onChange={handleEditorChange}
                  />
                </div>
              )}
            </form.Field>

            <div className="div-flex-row space-x-5 mb-3">
              <form.Field
                name="websiteLinks"
                validators={{
                  onSubmit: z.array(z.string().url("Invalid URL")),
                }}
              >
                {(field) => (
                  <div className="div-flex-col w-6/12">
                    <FormField
                      label="Website links"
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
                  onSubmit: z
                    .string()
                    .min(1, { message: "Contact number is required" })
                    .regex(/^\d{11}$/, {
                      message: "Contact number must be 11 digits long",
                    }),
                }}
              >
                {(field) => (
                  <div className="div-flex-col w-6/12">
                    <DynamicInputFields
                      name={field.name}
                      label="Contact number"
                      placeholder={"enter contact number"}
                      classNameLabel="text-md"
                      type="number"
                      maxCount={3}
                      value={field.state.value}
                      onChange={(values) => {
                        field.handleChange(values);
                        handleContactNumberChange(values);
                      }}
                    />
                  </div>
                )}
              </form.Field>

              <form.Field
                name="socialMediaLinks"
                validators={{
                  onSubmit: z.array(z.string().url("Invalid URL")),
                }}
              >
                {(field) => (
                  <div className="div-flex-col w-6/12">
                    <DynamicInputFields
                      name={field.name}
                      label="Social media"
                      placeholder={"enter social media links"}
                      maxCount={5}
                      classNameLabel="text-md"
                      value={field.state.value}
                      onChange={(values) => {
                        field.handleChange(values);
                        handleSocialMediaLinksChange(values);
                      }}
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
