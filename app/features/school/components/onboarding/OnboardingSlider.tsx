import { useState } from "react"
import { OnboardingForm1 } from "./OnboardingForm1";
import { OnboardingForm2 } from "./OnboardingForm2";
import { OnboardingForm3 } from "./OnboardingForm3";
import { Footer } from "./ActionBar";

export const OnboardingSlider: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <OnboardingForm1 />;
      case 2:
        return <OnboardingForm2 />;
      case 3:
        return <OnboardingForm3 />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-lvh">
      <div className="flex-grow">
        {renderForm()}
      </div>
      <Footer
        onContinue={handleContinue}
        onBack={handleBack}
        currentStep={currentStep}
      />
    </div>
  );
}