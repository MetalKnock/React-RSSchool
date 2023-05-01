import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  isSubmit?: boolean;
  className?: string;
  disabled?: boolean;
  dataTestid?: string;
}

export default function Button({
  children,
  isSubmit,
  className,
  disabled,
  dataTestid,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={isSubmit ? 'submit' : 'button'}
      disabled={disabled}
      data-testid={dataTestid}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  isSubmit: false,
  className: '',
  disabled: false,
  dataTestid: '',
};
