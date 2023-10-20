import * as Yup from 'yup';
import formModel from '../shared/model/formModel';

const {
  formField: { username, email, phone, country, password, repeatPassword }
} = formModel;

export const validationSchema = [
  Yup.object().shape({
    [username.name]: Yup.string()
      .required(username.requiredMsg)
      .min(4, username.minMsg)
      .max(12, username.minMsg),
    [email.name]: Yup.string()
      .required(email.requiredMsg)
      .email(email.invalidMsg),
    [phone.name]: Yup.string()
      .required(phone.requiredMsg)
      .matches(/^\+?\d{1,4}?\s?\d{10}$/, phone.matchesMsg)
  }),
  Yup.object().shape({
    [password.name]: Yup.string()
      .required(password.requiredMsg)
      .min(8, password.minMsg)
      .max(16, password.maxMsg),
    [repeatPassword.name]: Yup.string()
      .oneOf([Yup.ref(password.name), undefined], repeatPassword.matchMsg)
      .required(repeatPassword.requiredMsg)
  })
];
