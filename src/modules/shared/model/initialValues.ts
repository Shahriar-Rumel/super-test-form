import formModel from './formModel';

const {
  formField: { username, email, phone, country, password, repeatPassword }
} = formModel;

export default {
  [username.name]: '',
  [email.name]: '',
  [phone.name]: '',
  [country.name]: '',
  [password.name]: '',
  [country.name]: '',
  [repeatPassword.name]: false
};
