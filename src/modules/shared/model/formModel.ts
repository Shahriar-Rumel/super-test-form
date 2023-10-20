export default {
  formField: {
    username: {
      name: 'username',
      label: 'Username*',
      placeholder: 'Enter your username',
      requiredMsg: 'Username is required',
      minMsg: 'Username must be at least 4 characters',
      maxMsg: 'Username must be at most 12 characters'
    },
    email: {
      name: 'email',
      label: 'Email*',
      placeholder: 'Enter your email',
      requiredMsg: 'Email is required',
      invalidMsg: 'Invalid email address'
    },
    phone: {
      name: 'phone',
      label: 'Phone*',
      placeholder: 'Enter your phone',
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
      placeholder: 'Enter your password',
      requiredMsg: 'Password is required',
      minMsg: 'Password must be at least 8 characters',
      maxMsg: 'Password must be at most 16 characters'
    },
    repeatPassword: {
      name: 'repeatPassword',
      label: 'Repeat Password',
      placeholder: 'Repeat your password',
      requiredMsg: 'Repeat Password is required',
      matchMsg: 'Passwords must match'
    }
  }
};
