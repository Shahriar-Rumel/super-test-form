import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

import { fetchCountriesData } from '../../../api/countryService';
import { Country } from '../../../types/country';
import formModel from '../../../shared/model/formModel';

import Input from '../../../shared/components/Input';
import Select from '../../../shared/components/Select';
import Loader from '../../../shared/components/Loader';

const {
  formField: { username, email, phone, country }
} = formModel;

const InitialForm: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String | null>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCountries = await fetchCountriesData();
        setCountries(fetchedCountries);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(
          'An error occurred while fetching data. Please try again later.'
        );
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;

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
