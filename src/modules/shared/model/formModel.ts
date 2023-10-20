export default {
  formField: {
    username: {
      name: 'username',
      label: 'Username*',
      requiredMsg: 'Username is required',
      minMsg: 'Username must be at least 4 characters',
      maxMsg: 'Username must be at most 12 characters'
    },
    email: {
      name: 'email',
      label: 'Email*',
      requiredMsg: 'Email is required',
      invalidMsg: 'Invalid email address'
    },
    phone: {
      name: 'phone',
      label: 'Phone*',
      requiredMsg: 'Phone number is required',
      matchesMsg: 'Invalid phone number. Please use a valid format.'
    },
    country: {
      name: 'country',
      label: 'Country*',
      requiredMsg: 'Country is required'
    },
    password: {
      name: 'password',
      label: 'Password',
      requiredMsg: 'Password is required',
      minMsg: 'Password must be at least 8 characters',
      maxMsg: 'Password must be at most 16 characters'
    },
    repeatPassword: {
      name: 'password',
      label: 'Password',
      requiredMsg: 'Repeat Password is required',
      matchMsg: 'Passwords must matchs'
    }
  }
};
