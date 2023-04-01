import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  isSubmit?: boolean;
  className?: string;
}

export default function Button({ children, isSubmit, className }: ButtonProps) {
  return (
    <button className={`${styles.button} ${className}`} type={isSubmit ? 'submit' : 'button'}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  isSubmit: false,
  className: '',
};
