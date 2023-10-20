import { ErrorMessage, Field, FieldProps } from 'formik';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, name, type, placeholder }) => {
  return (
    <>
      <div className="mb-6">
        <label
          htmlFor={name}
          className="mb-4 text-[14px] font-regular text-white"
        >
          {label}
        </label>
        <Field name={name}>
          {({ field }: FieldProps) => (
            <input
              type={type ? type : 'text'}
              id={name}
              {...field}
              className="px-2 mt-2 text-primaryDark placeholder-primaryExtraLight text-sm outline-none focus:ring-brand focus:border-orange-500 w-full h-[40px]"
              placeholder={placeholder ? placeholder : ''}
            />
          )}
        </Field>
        <p className="mt-2 text-sm text-red font-medium">
          <ErrorMessage name={name} />
        </p>
      </div>
    </>
  );
};

export default Input;
