import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPlus } from "@fortawesome/free-solid-svg-icons"

export function StaffCard() {
  return (
    <div className="w-3/5 p-6 shadow-custom-all">
      <div className="space-y-10">
        <div className="flex w-full justify-between">
          <h1 className="text-xl font-semibold">Staff</h1>
          <h2 className="text-md text-blue self-center">Edit</h2>
        </div>

        <div className="flex flex-wrap justify-start gap-16">
          {/* First staff member */}
          <div className="div-flex-col items-center space-y-2">
            <div className="centered-div h-28 w-28 bg-gray-200 rounded-full border-2 border-blue-500">
              <FontAwesomeIcon icon={faUser} className="text-3xl text-gray-600" />
            </div>
            <h1 className="text-md font-medium">Name</h1>
            <h2 className="text-sm">Position</h2>
          </div>

          {/* Second staff member */}
          <div className="div-flex-col items-center space-y-2">
            <div className="centered-div h-28 w-28 bg-gray-200 rounded-full border-2 border-blue-500">
              <FontAwesomeIcon icon={faUser} className="text-3xl text-gray-600" />
            </div>
            <h1 className="text-md font-medium">Name</h1>
            <h2 className="text-sm">Position</h2>
          </div>

          {/* Add new staff member */}
          <div className="div-flex-col items-center space-y-2">
            <div className="centered-div h-28 w-28 bg-gray-200 rounded-full border-2 border-blue-500">
              <FontAwesomeIcon icon={faPlus} className="text-3xl text-gray-600" />
            </div>
            <h1 className="text-md font-medium">Name</h1>
            <h2 className="text-sm">Position</h2>
          </div>
        </div>
      </div>
    </div>
  );
}