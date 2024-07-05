import React from 'react';
import { useDynamicInputFields } from './hooks/useDynamicInputFields';
import { Button, Input } from '~/shared/components/base';

interface DynamicInputFieldsProps {
  name: string;
  label: string;
  placeholder?: string;
  value?: string[];
  onChange: (values: string[]) => void;
}

const DynamicInputFields: React.FC<DynamicInputFieldsProps> = ({
  name,
  label,
  placeholder,
  value = [''],
  onChange,
}) => {
  const { values, handleChange, handleAddField, handleRemoveField } = useDynamicInputFields(value);

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

  return (
    <div className="flex flex-col gap-3">
      <label className="text-md">{label}</label>
      {values.map((value, index) => (
        <div key={index} className="flex items-center gap-2">
          <Input
            type="text"
            name={`${name}[${index}]`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleFieldChange(index, e.target.value)}
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
