import React, { createRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import HumanList from '../../components/HumanList/HumanList';
import { InputContainer } from '../../components/InputContainer';
import { Human } from '../../shared/api/types';
import styles from './Form.module.scss';

interface Errors {
  name: boolean;
  birthday: boolean;
  country: boolean;
  agreement: boolean;
  gender: boolean;
  avatar: boolean;
}

interface FormState {
  errors: Errors;
  humans: Human[];
}

class Form extends React.Component<Record<string, never>, FormState> {
  nameRef: React.RefObject<HTMLInputElement>;

  birthdayRef: React.RefObject<HTMLInputElement>;

  countryRef: React.RefObject<HTMLSelectElement>;

  agreementRef: React.RefObject<HTMLInputElement>;

  maleRef: React.RefObject<HTMLInputElement>;

  femaleRef: React.RefObject<HTMLInputElement>;

  avatarRef: React.RefObject<HTMLInputElement>;

  constructor(props: never) {
    super(props);
    this.nameRef = createRef<HTMLInputElement>();
    this.birthdayRef = createRef<HTMLInputElement>();
    this.countryRef = createRef<HTMLSelectElement>();
    this.agreementRef = createRef<HTMLInputElement>();
    this.maleRef = createRef<HTMLInputElement>();
    this.femaleRef = createRef<HTMLInputElement>();
    this.avatarRef = createRef<HTMLInputElement>();
    this.state = {
      errors: {
        name: false,
        birthday: false,
        country: false,
        agreement: false,
        gender: false,
        avatar: false,
      },
      humans: [],
    };
  }

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentErrors: Errors = {
      name: false,
      birthday: false,
      country: false,
      agreement: false,
      gender: false,
      avatar: false,
    };

    if (!this.nameRef.current?.value) {
      currentErrors.name = true;
    }

    if (!this.birthdayRef.current?.value) {
      currentErrors.birthday = true;
    }

    if (this.countryRef.current?.value === 'Pick a country') {
      currentErrors.country = true;
    }

    if (!this.agreementRef.current?.checked) {
      currentErrors.agreement = true;
    }

    if (!this.maleRef.current?.checked && !this.femaleRef.current?.checked) {
      currentErrors.gender = true;
    }

    if (!this.avatarRef.current?.value) {
      currentErrors.avatar = true;
    }

    this.setState((prevState) => {
      return { ...prevState, errors: currentErrors };
    });
    if (Object.values(currentErrors).every((currentError) => !currentError)) {
      const { humans } = this.state;
      this.setState((prevState) => {
        return {
          ...prevState,
          humans: [
            ...humans,
            {
              id: uuidv4(),
              name: this.nameRef.current?.value || '',
              birthday: this.birthdayRef.current?.value || '',
              country: this.countryRef.current?.value || '',
              agreement: this.agreementRef.current?.checked || false,
              gender: this.maleRef.current?.checked ? 'male' : 'female',
              avatar: this.avatarRef?.current?.files
                ? URL.createObjectURL(this.avatarRef.current.files[0])
                : '',
            },
          ],
        };
      });
    }
  };

  render() {
    const { errors, humans } = this.state;
    return (
      <>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <InputContainer
            labelMessage="name"
            errorMessage="Please enter your name"
            isError={errors.name}
          >
            <input type="text" id="name" ref={this.nameRef} placeholder="Enter name" />
          </InputContainer>

          <InputContainer
            labelMessage="birthday"
            errorMessage="Please enter your birthday"
            isError={errors.birthday}
          >
            <input type="date" id="birthday" ref={this.birthdayRef} />
          </InputContainer>
          <InputContainer
            labelMessage="country"
            errorMessage="Please enter your country"
            isError={errors.country}
          >
            <select id="country" ref={this.countryRef}>
              <option>Pick a country</option>
              <option value="russia">Russia</option>
              <option value="belarus">Belarus</option>
              <option value="armenia">Armenia</option>
            </select>
          </InputContainer>
          <InputContainer
            labelMessage="agreement"
            errorMessage="Please enter your agreement"
            isError={errors.agreement}
          >
            <input type="checkbox" id="agreement" ref={this.agreementRef} />
          </InputContainer>
          <div>
            Gender:
            <label htmlFor="male">
              male
              <input type="radio" id="male" name="gender" ref={this.maleRef} />
            </label>
            <label htmlFor="female">
              female
              <input type="radio" id="female" name="gender" ref={this.femaleRef} />
            </label>
            {errors.gender && <div>Please enter your gender</div>}
          </div>
          <InputContainer
            labelMessage="avatar"
            errorMessage="Please enter your avatar"
            isError={errors.avatar}
          >
            <input type="file" id="avatar" ref={this.avatarRef} />
          </InputContainer>
          <button type="submit">Create card</button>
        </form>
        <HumanList humans={humans} />
      </>
    );
  }
}

export default Form;
