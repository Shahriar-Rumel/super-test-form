import Input from '../../../shared/components/Input';
import formModel from '../../../shared/model/formModel';
import Select from '../../../shared/components/Select';

const {
  formField: { username, email, phone, country }
} = formModel;

const InitialForm = () => {
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
      <Select name={country.name} label={country.label} />
    </>
  );
};

export default InitialForm;
