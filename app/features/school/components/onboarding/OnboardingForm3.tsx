import { Form } from "@remix-run/react";
import { Input } from "stories/Input";
import { useLogoOnboardingForm } from "../../hooks/useLogoOnboardingForm";
import { useState } from "react";

export function OnboardingForm3() {
  const [file, setFile] = useState<File | undefined>();

  const form = useLogoOnboardingForm({
    logoFile: null,
  });

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: File
    }
    setFile(target.files[0]);
  }

  return (
    <div className="flex items-center flex-col h-full">
      <div className="div-flex-col items-center w-5/12 h-full">
        <h1 className="text-5xl font-semibold m-5">Upload school logo</h1>

        <Form
          className="centered-div flex-col h-2/3 w-full"
          onSubmit={e => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <form.Field name="logoFile">
            {(field) => (
              <div className="centered-div flex-col h-3/5 w-full border-2 border-dashed">
                <Input
                  className="hidden"
                  id="logo-upload"
                  type="file"
                  onChange={handleOnChange}
                />
                <label
                  htmlFor="logo-upload"
                  className="div-flex-col items-center cursor-pointer font-medium text-lg space-y-5"
                >
                  <div className="h-28 w-28 bg-gray-300 flex items-center justify-center" />
                  <span>Upload from your device</span>
                </label>
              </div>
            )}
          </form.Field>
        </Form>

      </div>
    </div>
  );
}