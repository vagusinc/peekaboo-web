import { useState } from 'react';

export const useDynamicInputFields = (initialValues: string[] = ['']) => {
  const [values, setValues] = useState<string[]>(initialValues);

  const handleChange = (index: number, newValue: string) => {
    const updatedValues = values.map((value, i) => (i === index ? newValue : value));
    setValues(updatedValues);
  };

  const handleAddField = () => {
    setValues([...values, '']);
  };

  const handleRemoveField = (index: number) => {
    const updatedValues = values.filter((_, i) => i !== index);
    setValues(updatedValues);
  };

  return {
    values,
    handleChange,
    handleAddField,
    handleRemoveField,
  };
};
