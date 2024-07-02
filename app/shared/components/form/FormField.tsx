import { Input } from "../base";

interface FormFieldProps {
  classNameLabel?: string;
  classNameInput?: string;
  value?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  errorMessage?: string;
  onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
  onBlur?: React.InputHTMLAttributes<HTMLInputElement>["onBlur"];
}

const FormField = ({
  classNameLabel,
  classNameInput,
  value,
  name,
  label,
  placeholder,
  type,
  errorMessage,
  onChange,
  onBlur,
}: FormFieldProps) => {
  return (
    <div className={"flex flex-col gap-1.5"}>
      <label htmlFor={name} className= { classNameLabel || "font-semibold text-xl text-black" }>
      {label && (
          <>
            {label.split('*')[0]}
            {label.includes('*') && <span className="text-red">*</span>}
          </>
        )}
      </label>
      <Input
        className={
          errorMessage ? "border-red text-red focus-visible:border-red" : "" || classNameInput
        }
        name={name}
        placeholder={placeholder || ""}
        value={value}
        type={type || "text"}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errorMessage && (
        <em className="font-normal text-base text-red">{errorMessage}</em>
      )}
    </div>
  );
};

export { FormField };
