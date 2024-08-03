import { useState } from "react";

function useProfileImage() {
  const [file, setFile] = useState<File | undefined>();
  const [profileImage, setProfileImage] = useState<string | null>(null);

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
      setFile(undefined);
      alert("Invalid file type. Only JPEG and PNG are allowed.");
      return;
    }

    if (file.size > 5000000) {
      setFile(undefined);
      alert("File size exceeds 5MB.");
      return;
    }

    setFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && e.target.result) {
        setProfileImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  }

  return {
    file,
    profileImage,
    handleOnChange,
  };
}

export default useProfileImage;
