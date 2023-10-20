import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { Icon } from '@iconify/react';
import { useField } from 'formik';

const countries = [
  { id: 'BD', name: 'Bangladesh' },
  { id: 'USA', name: 'United States' }
];

interface SelectProps {
  label: string;
  name: string;
}

const Select = ({ label, name }: SelectProps) => {
  const [, , helpers] = useField<String>(name);
  const [selectedPerson, setSelectedPerson] = useState(countries[0]);

  return (
    <div className="relative mb-6">
      <label
        htmlFor={name}
        className="mb-4 text-[14px] font-regular text-white"
      >
        {label}
      </label>
      <Listbox
        value={selectedPerson}
        onChange={(newSelectedPerson) => {
          setSelectedPerson(newSelectedPerson);
          helpers.setValue(selectedPerson.name);
        }}
      >
        <Listbox.Button
          className={
            'px-2 mt-2 bg-white flex justify-between items-center text-left text-primaryDark placeholder-primaryExtraLight text-sm outline-none focus:ring-brand focus:border-orange-500 w-full h-[40px]'
          }
        >
          {selectedPerson.name}{' '}
          <Icon icon="grommet-icons:form-down" className="text-[18px]" />
        </Listbox.Button>
        <Listbox.Options className="absolute top-[80px] bg-white w-[100%]">
          {countries.map((country, index) => (
            <Listbox.Option
              key={country.id}
              value={country}
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
                  {country.name}{' '}
                  {selected && (
                    <Icon icon="ic:outline-check" className="text-[18px]" />
                  )}
                </p>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default Select;
