import { z } from "zod";
import { useSchoolInformationForm } from "./hooks/useSchoolInformationForm";
import { FormField, RichTextEditor } from "~/shared/components/";
import DynamicInputFields from "./DynamicInputFields";
import { useState } from "react";

export function SchoolInformationForm() {
  const { form, handleSubmit } = useSchoolInformationForm();
  const [websiteLinks, setWebsiteLinks] = useState<string[]>([]);
  const [editorContent, setEditorContent] = useState('');

  const handleWebsiteLinksChange = (values: string[]) => {
    setWebsiteLinks(values);
  };

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

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
                  onSubmit: z
                    .array(z.string()
                      .url("Invalid URL"))
                }}
              >
                {(field) => (
                  <div className="div-flex-col w-6/12">
                    <DynamicInputFields
                      name={field.name}
                      label="Website"
                      placeholder={"enter website link"}
                      value={field.state.value}
                      onChange={handleWebsiteLinksChange}
                    />
                  </div>
                )}
              </form.Field>

              {/** For testing purposes only **/}
              <pre>{JSON.stringify(websiteLinks, null, 2)}</pre>

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
                name="socialMediaLinks"
                validators={{
                  onSubmit: z
                    .array(z.string()
                      .url("Invalid URL"))
                }}
              >
                {(field) => (
                  <div className="div-flex-col w-6/12">
                    <DynamicInputFields
                      name={field.name}
                      label="Social Media"
                      placeholder={"enter social media links"}
                      value={field.state.value}
                      onChange={(values) => field.handleChange(values)}
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

