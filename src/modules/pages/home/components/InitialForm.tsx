import { useEffect, useState } from 'react';

import { fetchCountriesData } from '../../../api/countryService';
import { Country } from '../../../types/country';
import formModel from '../../../shared/model/formModel';

import Input from '../../../shared/components/Input';
import Select from '../../../shared/components/Select';

const {
  formField: { username, email, phone, country }
} = formModel;

const InitialForm: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCountries = await fetchCountriesData();
        setCountries(fetchedCountries);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h1>Loading</h1>;

  return (
    <>
      <Input
        label={username.label}
        name={username.name}
        type="text"
        placeholder={username.placeholder}
      />
      <Input
        label={email.label}
        name={email.name}
        type="text"
        placeholder={email.placeholder}
      />
      <Input
        label={phone.label}
        name={phone.name}
        type="text"
        placeholder={phone.placeholder}
      />
      <Select name={country.name} label={country.label} options={countries} />
    </>
  );
};

export default InitialForm;
