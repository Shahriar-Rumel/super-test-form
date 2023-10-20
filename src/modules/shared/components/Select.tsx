import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { Icon } from '@iconify/react';
import { useField, ErrorMessage } from 'formik';

interface SelectProps {
  label: string;
  name: string;
  options: { id: string; name: string }[];
}

const Select: React.FC<SelectProps> = ({ label, name, options }) => {
  const [field, , helpers] = useField<String>(name);
  const [selectedOption, setSelectedOption] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const handleOptionChange = (newSelectedOption: any) => {
    setSelectedOption(newSelectedOption);
    helpers.setValue(newSelectedOption ? newSelectedOption.name : '');
  };

  return (
    <div className="relative mb-6">
      <label
        htmlFor={name}
        className="mb-4 text-[14px] font-regular text-white"
      >
        {label}
      </label>
      <Listbox value={selectedOption} onChange={handleOptionChange}>
        <Listbox.Button
          className={
            'px-2 mt-2 bg-white flex justify-between items-center text-left text-primaryDark placeholder-primaryExtraLight text-sm outline-none focus:ring-brand focus:border-orange-500 w-full h-[40px]'
          }
        >
          {selectedOption ? selectedOption.name : 'Select country'}
          <Icon icon="grommet-icons:form-down" className="text-[18px]" />
        </Listbox.Button>
        <Listbox.Options className="absolute top-[80px] h-[200px] overflow-y-scroll bg-white w-[100%]">
          {options.map((option, index) => (
            <Listbox.Option
              key={option.id}
              value={option}
              className={`cursor-pointer hover:bg-primary hover:text-white ${
                index % 2 === 1 && 'bg-primaryExtraLight bg-opacity-10'
              } `}
            >
              {({ selected }) => (
                <p
                  className={`flex gap-4 items-center py-2 px-4 ${
                    selected &&
                    'font-semibold  text-primaryDark hover:text-white'
                  }`}
                >
                  {option.name}{' '}
                  {selected && (
                    <Icon icon="ic:outline-check" className="text-[18px]" />
                  )}
                </p>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
      <p className="mt-2 text-sm text-red-300 font-regular">
        <ErrorMessage name={name} />
      </p>
    </div>
  );
};

export default Select;
