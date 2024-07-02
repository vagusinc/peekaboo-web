import { Textarea } from "../base";

interface TextAreaFieldProps {
  classNameLabel?: string;
  value?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  rows?: number;
  errorMessage?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
}

const TextAreaField = ({
  classNameLabel,
  value,
  name,
  label,
  placeholder,
  rows = 2, 
  errorMessage,
  onChange,
  onBlur
}: TextAreaFieldProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className={classNameLabel || "text-black"}>
        {label}
      </label>
      <Textarea
        className={`custom-textarea ${errorMessage ? 'border-red text-red focus-visible:border-red' : ''}`}
        name={name}
        placeholder={placeholder}
        value={value}
        rows={rows}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errorMessage && (
        <em className="font-normal text-base text-red">{errorMessage}</em>
      )}
    </div>
  );
};

export { TextAreaField };
