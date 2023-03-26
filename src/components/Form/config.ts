interface Errors {
  name: boolean;
  birthday: boolean;
  country: boolean;
  gender: boolean;
  avatar: boolean;
  agreement: boolean;
}

enum ErrorMessages {
  name = 'Please enter your name',
  birthday = 'Please enter your birthday',
  country = 'Please select a country from the list',
  gender = 'Please select gender',
  avatar = 'Please upload your avatar',
  agreement = 'Please check the box',
}

export { Errors, ErrorMessages };
