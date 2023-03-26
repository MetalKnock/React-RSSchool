import React, { createRef, RefObject } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Human } from '../../shared/api/types';
import { InputContainer } from '../InputContainer';
import { Button } from '../UI/Button';
import { Errors } from './config';
import styles from './Form.module.scss';

interface GeneratorState {
  errors: Errors;
}

interface FormProps {
  addHuman: (human: Human) => void;
}

class Form extends React.PureComponent<FormProps, GeneratorState> {
  formRef: RefObject<HTMLFormElement>;

  nameRef: RefObject<HTMLInputElement>;

  birthdayRef: RefObject<HTMLInputElement>;

  countryRef: RefObject<HTMLSelectElement>;

  agreementRef: RefObject<HTMLInputElement>;

  maleRef: RefObject<HTMLInputElement>;

  femaleRef: RefObject<HTMLInputElement>;

  avatarRef: RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.formRef = createRef<HTMLFormElement>();
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
      const { addHuman } = this.props;
      addHuman({
        id: uuidv4(),
        name: this.nameRef.current?.value || '',
        birthday: this.birthdayRef.current?.value || '',
        country: this.countryRef.current?.value || '',
        agreement: this.agreementRef.current?.checked || false,
        gender: this.maleRef.current?.checked ? 'male' : 'female',
        avatar: this.avatarRef?.current?.files
          ? URL.createObjectURL(this.avatarRef.current.files[0])
          : '',
      });
      this.formRef.current?.reset();
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit} ref={this.formRef}>
        <h2>Personal Info</h2>
        <InputContainer
          labelMessage="name"
          errorMessage="Please enter your name"
          isError={errors.name}
        >
          <input
            className={styles.form__input}
            type="text"
            id="name"
            ref={this.nameRef}
            placeholder="Enter name"
          />
        </InputContainer>
        <InputContainer
          labelMessage="birthday"
          errorMessage="Please enter your birthday"
          isError={errors.birthday}
        >
          <input className={styles.form__input} type="date" id="birthday" ref={this.birthdayRef} />
        </InputContainer>
        <InputContainer
          labelMessage="country"
          errorMessage="Please select a country from the list"
          isError={errors.country}
        >
          <select className={styles.form__input} id="country" ref={this.countryRef}>
            <option>Pick a country</option>
            <option value="russia">Russia</option>
            <option value="belarus">Belarus</option>
            <option value="armenia">Armenia</option>
          </select>
        </InputContainer>
        <div className={styles.form__gender}>
          <p>Gender</p>
          <div className={styles.form__genderInner}>
            <label className={styles.form__label} htmlFor="male">
              Male
              <input
                className={styles.form__input}
                type="radio"
                id="male"
                name="gender"
                ref={this.maleRef}
              />
            </label>
            <label className={styles.form__label} htmlFor="female">
              Female
              <input
                className={styles.form__input}
                type="radio"
                id="female"
                name="gender"
                ref={this.femaleRef}
              />
            </label>
          </div>
          {errors.gender && <div className={styles.form__genderError}>Please select gender</div>}
        </div>
        <InputContainer
          labelMessage="avatar"
          errorMessage="Please upload your avatar"
          isError={errors.avatar}
        >
          <input type="file" id="avatar" ref={this.avatarRef} />
        </InputContainer>
        <InputContainer
          labelMessage=""
          errorMessage="Please check the box"
          isError={errors.agreement}
        >
          <div style={{ display: 'flex', gap: '10px', textTransform: 'none' }}>
            <div>I consent to my personal data</div>
            <input type="checkbox" id="agreement" ref={this.agreementRef} />
          </div>
        </InputContainer>
        <Button isSubmit>Create card</Button>
      </form>
    );
  }
}

export default Form;
