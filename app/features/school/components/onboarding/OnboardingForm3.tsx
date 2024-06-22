import { Form } from "@remix-run/react";
import { Input } from "stories/Input";
import { useState } from "react";

export function OnboardingForm3() {
  const [file, setFile] = useState<File | undefined>();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files ? e.target.files[0] : null;
    if (!file) {
      return;
    }

    validateFile(file);
  }

  function validateFile(file: File) {
    const validTypes = ['image/jpeg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      setErrorMessage('Please upload an image file (jpeg/jpg or png only)');
      setPreviewUrl(null);
      setFile(undefined);
      return;
    }

    if (file.size > 5000000) { //* 5MB limit
      setErrorMessage('File size should not exceed 5MB.');
      setPreviewUrl(null);
      setFile(undefined);
      return;
    }

    setFile(file);
    setErrorMessage(null);
    setPreviewUrl(URL.createObjectURL(file));
  }

  return (
    <div className="div-flex-col items-center h-full">
      <div className="div-flex-col items-center w-5/12 h-full">
        <h1 className="text-5xl font-semibold m-5">Upload school logo</h1>

        <Form
          className="centered-div flex-col h-2/3 w-full"
          onSubmit={e => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <div className="centered-div flex-col h-3/5 w-full border-2 border-dashed">
            <Input
              className="hidden"
              id="logo-upload"
              type="file"
              accept="image/*"
              onChange={handleOnChange}
            />
            <label
              htmlFor="logo-upload"
              className="div-flex-col items-center cursor-pointer font-medium text-lg space-y-5"
            >
              {previewUrl ? (
                <img src={previewUrl} alt="Preview" className="h-40 w-40 object-cover" />
              ) : (
                <div className="centered-div h-28 w-28 bg-gray-300" />
              )}
              <span>Upload from your device</span>
            </label>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </div>
        </Form>

      </div>
    </div>
  );
}