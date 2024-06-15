export function Footer() {
  return (
    <footer className="w-full shadow-top">
      <div className="div-flex-row h-full items-center justify-between py-5 px-10">
        <p className="text-sm">Cancel</p>
        <div className="justify-between div-flex-row items-center w-52">
          <p className="text-blue-400">
            Back
          </p>
          <button className="justify-center bg-blue-500 rounded-md text-white border py-2 px-8">
            Continue
          </button>
        </div>
      </div>
    </footer>
  );
}