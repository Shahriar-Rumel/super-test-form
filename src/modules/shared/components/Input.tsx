import { Icon } from '@iconify/react';
import { ErrorMessage, Field, FieldProps, useField } from 'formik';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, name, type, placeholder }) => {
  const [, meta] = useField<boolean>(name);
  console.log(meta);
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
            <div className="relative">
              <input
                type={type ? type : 'text'}
                id={name}
                {...field}
                className="px-2 mt-2 bg-white text-primaryDark placeholder-primaryExtraLight text-sm outline-none focus:ring-brand focus:border-orange-500 w-full h-[40px]"
                placeholder={placeholder ? placeholder : ''}
              />
              {meta.touched && meta.error && true && (
                <Icon
                  icon="bxs:error-alt"
                  className="absolute right-3 text-red-500 top-5"
                />
              )}
            </div>
          )}
        </Field>

        <p className="mt-2 text-sm text-red-300 font-regular">
          <ErrorMessage name={name} />
        </p>
      </div>
    </>
  );
};

export default Input;
