export function OnboardingForm3() {

  return (
    <div className="flex items-center flex-col h-full">
      <div className="div-flex-col items-center w-5/12 h-full">
        <h1 className="text-5xl font-semibold m-5">Upload school logo</h1>
        <div className="centered-div flex-col h-2/3 w-full">
          <div className="centered-div flex-col h-3/5 w-full border-2 border-dashed">
            <input
              className="hidden"
              id="logo-upload"
              type="file"
            />
            <label
              htmlFor="logo-upload"
              className="div-flex-col items-center cursor-pointer font-medium text-lg space-y-5"
            >
              <div className="h-28 w-28 bg-gray-300"></div>
              <span>Upload from your device</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}