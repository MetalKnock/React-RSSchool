import { useEffect } from 'react';
import styles from './Toast.module.scss';

interface ToastProps {
  isError?: boolean;
  notification: string;
  showToast: boolean;
  onClose: () => void;
}

export default function Toast({ isError, notification, showToast, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [showToast, onClose]);

  return (
    <div
      className={`${styles.toast} ${showToast ? styles.toast_show : styles.toast_hidden} ${
        isError ? styles.toast_error : ''
      }`}
    >
      {notification}
    </div>
  );
}
Toast.defaultProps = {
  isError: false,
};
