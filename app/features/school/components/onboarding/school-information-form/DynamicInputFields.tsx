import React, { useEffect, useRef } from "react";
import { useDynamicInputFields } from "./hooks/useDynamicInputFields";
import { Button, Input } from "~/shared/components/base";

interface DynamicInputFieldsProps {
  classNameLabel?: string;
  name: string;
  label: string;
  placeholder?: string;
  value?: string[];
  onChange: (values: string[]) => void;
}

const DynamicInputFields: React.FC<DynamicInputFieldsProps> = ({
  classNameLabel,
  name,
  label,
  placeholder,
  value = [""],
  onChange,
}) => {
  const { values, handleChange, handleAddField, handleRemoveField } =
    useDynamicInputFields(value);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleFieldChange = (index: number, newValue: string) => {
    handleChange(index, newValue);
    onChange(values);
  };

  const handleAddClick = () => {
    handleAddField();
    onChange(values);
  };

  const handleRemoveClick = (index: number) => {
    handleRemoveField(index);
    onChange(values);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddClick();
    }
  };

  useEffect(() => {
    if (inputRefs.current[values.length - 1]) {
      inputRefs.current[values.length - 1]?.focus();
    }
  }, [values.length]);

  return (
    <div className="flex flex-col gap-3">
      <label
        htmlFor={name}
        className={classNameLabel || "font-semibold text-xl text-black"}
      >
        {label && (
          <>
            {label.split("*")[0]}
            {label.includes("*") && <span className="text-red">*</span>}
          </>
        )}
      </label>
      {values.map((value, index) => (
        <div key={index} className="flex items-center gap-2">
          <Input
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            name={`${name}[${index}]`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleFieldChange(index, e.target.value)}
            onKeyPress={handleKeyPress} // Add key press handler
            className="custom-input"
          />
          {index > 0 && (
            <Button type="button" onClick={() => handleRemoveClick(index)}>
              Remove
            </Button>
          )}
        </div>
      ))}
      <Button type="button" onClick={handleAddClick}>
        Add {label}
      </Button>
    </div>
  );
};

export default DynamicInputFields;
