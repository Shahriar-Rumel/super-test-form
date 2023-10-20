import Input from '../../../shared/components/Input';
import formModel from '../../../shared/model/formModel';

const {
  formField: { password, repeatPassword }
} = formModel;

const PasswordForm = () => {
  return (
    <>
      <Input
        label={password.label}
        name={password.name}
        type="password"
        placeholder={password.placeholder}
      />
      <Input
        label={repeatPassword.label}
        name={repeatPassword.name}
        type="password"
        placeholder={repeatPassword.placeholder}
      />
    </>
  );
};

export default PasswordForm;
