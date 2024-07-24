import { useState } from "react"
import { Footer } from "./ActionBar";
import { SchoolInformationForm } from "./school-information-form";
import { SchoolAddressForm } from "./school-address-form";
import { SchoolLogoForm } from "./school-logo-form";

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
        return <SchoolInformationForm />;
      case 2:
        return <SchoolAddressForm />;
      case 3:
        return <SchoolLogoForm />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-lvh">
      <div className="flex-grow overflow-hidden">
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