/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { v4 as uuidv4 } from 'uuid';
import { Human } from '../../shared/api/types';
import { InputContainer } from '../InputContainer';
import { Button } from '../UI/Button';
import { ErrorMessages, FormValues, MAX_DATE, MIN_DATE } from './config';
import styles from './Form.module.scss';

interface FormProps {
  addHuman: (human: Human) => void;
}

export default function Form({ addHuman }: FormProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { name, birthday, country, agreement, gender, avatar } = data;
    addHuman({
      id: uuidv4(),
      name,
      birthday,
      country,
      agreement,
      gender,
      avatar: avatar.length ? URL.createObjectURL(avatar[0]) : '',
    });
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Personal Info</h2>
      <InputContainer label="name" error={errors?.name?.message}>
        <input
          className={styles.form__input}
          id="name"
          {...register('name', {
            required: ErrorMessages.nameRequired,
            pattern: {
              value: /^[A-ZА-Я][a-zа-я]{1,}$/,
              message: ErrorMessages.namePattern,
            },
          })}
        />
      </InputContainer>
      <InputContainer label="birthday" error={errors?.birthday?.message}>
        <input
          className={styles.form__input}
          type="date"
          id="birthday"
          {...register('birthday', {
            required: ErrorMessages.birthdayRequired,
            validate: (value) =>
              (value >= MIN_DATE && value < MAX_DATE) || ErrorMessages.birthdayValidate,
          })}
        />
      </InputContainer>
      <InputContainer label="country" error={errors?.country?.message}>
        <select
          className={styles.form__input}
          id="country"
          {...register('country', {
            validate: (value) => value !== 'Pick a country' || ErrorMessages.countryValidate,
          })}
        >
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
              {...register('gender', { required: ErrorMessages.genderRequired })}
            />
          </label>
          <label className={styles.form__label} htmlFor="female">
            Female
            <input
              className={styles.form__input}
              type="radio"
              id="female"
              {...register('gender', { required: ErrorMessages.genderRequired })}
            />
          </label>
        </div>
        {errors.gender && <div className={styles.form__genderError}>{errors.gender.message}</div>}
      </div>
      <InputContainer label="avatar" error={errors?.avatar?.message}>
        <input
          type="file"
          id="avatar"
          accept="image/png, image/gif, image/jpeg"
          {...register('avatar', {
            required: ErrorMessages.avatarRequired,
            validate: (value) =>
              value[0].type === ('image/jpeg' || 'image/gif' || 'image/jpeg') ||
              ErrorMessages.avatarValidate,
          })}
        />
      </InputContainer>
      <InputContainer label="" error={errors?.agreement?.message}>
        <div style={{ display: 'flex', gap: '10px', textTransform: 'none' }}>
          <div>I consent to my personal data</div>
          <input
            type="checkbox"
            id="agreement"
            {...register('agreement', {
              required: ErrorMessages.agreementRequired,
            })}
          />
        </div>
      </InputContainer>
      <Button isSubmit>Create card</Button>
    </form>
  );
}
