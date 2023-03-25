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
    <>
      <label htmlFor={labelMessage} className={styles.inputContainer__label}>
        {`${labelMessage}:`}
        {children}
      </label>
      {isError && <div>{errorMessage}</div>}
    </>
  );
}
