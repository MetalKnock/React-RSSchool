import React from 'react';
import styles from './InputContainer.module.scss';

interface InputContainerProps {
  labelMessage: string;
  errorMessage: string;
  isError: boolean;
  children: React.ReactNode;
}

export default function InputContainer({
  labelMessage,
  errorMessage,
  isError,
  children,
}: InputContainerProps) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={labelMessage} className={styles.inputContainer__label}>
        <p className={styles.inputContainer__labelMessage}>{`${labelMessage}`}</p>
        {children}
      </label>
      {isError && <div className={styles.inputContainer__error}>{errorMessage}</div>}
    </div>
  );
}
