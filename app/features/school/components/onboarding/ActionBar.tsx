import React from "react";

interface ActionBarProps {
  onContinue: () => void;
  onBack: () => void;
  currentStep: number;
}

export const Footer: React.FC<ActionBarProps> = ({ onContinue, onBack, currentStep }) => {

  return (
    <div className="flex justify-center h-1/5 w-svh">
      <div className="w-5/12 h-fit">
        <div className="div-flex-row h-full items-center justify-between py-5 px-10">
          <p className="text-sm">Cancel</p>
          <div className="justify-between div-flex-row items-center w-52">
            <button className="text-sm cursor-pointer" onClick={onBack} style={{ visibility: currentStep === 1 ? 'hidden' : 'visible' }}>
              Back
            </button>
            <button
              className="justify-center bg-blue-500 rounded-md text-white border py-2 px-8"
              onClick={onContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}