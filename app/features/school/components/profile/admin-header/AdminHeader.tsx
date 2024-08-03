import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPhone, faEnvelope, faPencil } from "@fortawesome/free-solid-svg-icons";
import { Input } from "stories/Input";
import useCoverImage from "./hooks/useCoverImage";
import useProfileImage from "./hooks/useProfileImage";

export function AdminHeader() {
  const { backgroundImage: coverImage, handleOnChange: handleOnChangeCover } = useCoverImage();
  const { profileImage, handleOnChange: handleOnChangeProfile } = useProfileImage();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, elementId: string) => {
    if (e.key === " ") {
      e.preventDefault();
      document.getElementById(elementId)?.click();
    }
  };

  return (
    <header className="h-full w-full">
      <Input
        className="hidden"
        id="background-upload"
        type="file"
        accept="image/*"
        onChange={handleOnChangeCover}
      />

      <Input
        className="hidden"
        id="profile-upload"
        type="file"
        accept="image/*"
        onChange={handleOnChangeProfile}
      />

      <div
        className={`relative h-auto min-h-[20vh] ${!coverImage && "bg-violet-500"} cursor-pointer`}
        style={{ backgroundImage: coverImage ? `url(${coverImage})` : "none", backgroundSize: 'cover', backgroundPosition: 'center' }}
        onClick={() => document.getElementById("background-upload")?.click()}
        onKeyDown={(e) => handleKeyDown(e, "background-upload")}
        tabIndex={0}
        role="button"
        aria-label="Upload background image"
      >
        <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity" />
        {!coverImage && (
          <FontAwesomeIcon icon={faCamera} size="2x" className="text-slate-800 p-6 float-end" />
        )}
      </div>

      <div className="max-w-full ml-64 mr-64">
        <div className="div-flex-row space-x-10">
          <div
            className={`relative -translate-y-1/2 ${!profileImage && "bg-gray-300"} rounded-full border-4 border-white cursor-pointer centered-div`}
            style={{ width: "11rem", height: "11rem", backgroundImage: profileImage ? `url(${profileImage})` : "none", backgroundSize: 'cover', backgroundPosition: 'center' }}
            onClick={() => document.getElementById("profile-upload")?.click()}
            onKeyDown={(e) => handleKeyDown(e, "profile-upload")}
            tabIndex={0}
            role="button"
            aria-label="Upload profile image"
          >
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity rounded-full" />
            {!profileImage && (
              <FontAwesomeIcon icon={faCamera} size="2x" className="text-gray-500" />
            )}
          </div>

          <div className="min-w-[25rem] max-w-[40rem] my-6 space-y-2">
            <div className="div-flex-row justify-between">
              <h1 className="text-3xl font-semibold mr-10"> Name of the Playschool </h1>
              <FontAwesomeIcon icon={faPencil} />
            </div>

            <h4 className="text-sm"> Address of the Playschool </h4>

            <div className="div-flex-row w-auto space-x-7">
              <div className="div-flex-row space-x-1">
                <FontAwesomeIcon icon={faPhone} className="self-center" />
                <h4 className="text-sm text-blue underline"> Contact Number </h4>
              </div>

              <div className="div-flex-row space-x-1">
                <FontAwesomeIcon icon={faEnvelope} className="self-center" />
                <h4 className="text-sm text-blue underline"> Email Goes </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
}