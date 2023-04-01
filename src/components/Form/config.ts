interface Errors {
  name: boolean;
  birthday: boolean;
  country: boolean;
  gender: boolean;
  avatar: boolean;
  agreement: boolean;
}

type FormValues = {
  name: string;
  birthday: string;
  country: string;
  avatar: FileList;
  agreement: boolean;
  gender: 'male' | 'female';
};

enum ErrorMessages {
  nameRequired = 'Please enter your name',
  namePattern = 'Please enter valid name. Start with uppercase and use only letters',
  birthdayRequired = 'Please enter your birthday',
  birthdayValidate = 'Please enter a valid year of birth between 1907 and 2022',
  countryValidate = 'Please select a country from the list',
  genderRequired = 'Please select gender',
  avatarRequired = 'Please upload your avatar',
  avatarValidate = 'Please select the correct file format jpeg / png / gif',
  agreementRequired = 'Please check the box',
}

const MIN_DATE = '1907-01-01';
const MAX_DATE = '2023-01-01';

export { Errors, ErrorMessages, FormValues, MIN_DATE, MAX_DATE };
