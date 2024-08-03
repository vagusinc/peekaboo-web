import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import { RichTextEditor } from "~/shared/components";
import { Button } from "~/shared/components/base";

export function PlaySchoolInformationCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(`
    <div>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis purus libero, sollicitudin condimentum quam malesuada suscipit. Phasellus gravida justo sit amet enim pharetra dignissim.</h2>
      <h1 class="text-lg font-bold">Our Vision</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis purus libero, sollicitudin condimentum quam malesuada suscipit.</h2>
      <h1 class="text-lg font-bold">Our Mission</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis purus libero, sollicitudin condimentum quam malesuada suscipit.</h2>
    </div>
  `);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="w-3/5">
      <div className="p-6 shadow-custom-all max-h-full max-w-full rounded-lg space-y-5">

        <div className="div-flex-row justify-between">
          <h1 className="text-xl font-semibold">
            About this Playschool
          </h1>

          {!isEditing && (
            <FontAwesomeIcon
              icon={faPencil}
              className="cursor-pointer hover:text-violet-500"
              onClick={() => setIsEditing(true)}
            />
          )}
        </div>

        {isEditing ? (
          <>
            <RichTextEditor
              classNameInput="max-h-full max-w-full"
              fullHeight={true}
              value={content}
              onChange={(newContent) => setContent(newContent)}
            />
            <div className="flex justify-end mt-4 space-x-2">
              <Button
                className="p-5 bg-violet-500 text-white rounded hover:bg-violet-700 transition-colors"
                onClick={handleSave}
              >
                Save
              </Button>
              <Button
                variant={"ghost"}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
          </>
        ) : (
          <div
            className="flex-div-col space-y-6 mr-20 break-words overflow-hidden"
            style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </div>
  );
}