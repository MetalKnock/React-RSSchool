import React from 'react';
import styles from './InputContainer.module.scss';

interface InputContainerProps {
  label: string;
  error: string | undefined;
  children: React.ReactNode;
}

export default function InputContainer({ label, error, children }: InputContainerProps) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={label} className={styles.inputContainer__label}>
        <p className={styles.inputContainer__labelMessage}>{`${label}`}</p>
        {children}
      </label>
      {error && <div className={styles.inputContainer__error}>{error}</div>}
    </div>
  );
}
