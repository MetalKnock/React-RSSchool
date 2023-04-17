import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { hiddenToast } from '../../shared/store/reducers/toastSlice';
import styles from './Toast.module.scss';

export default function Toast() {
  const { isVisible, message, isErrorToast } = useAppSelector((state) => state.toastSlice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isVisible) dispatch(hiddenToast());
    }, 2000);

    return () => clearTimeout(timer);
  }, [isVisible, dispatch]);

  return (
    <div
      className={`${styles.toast} ${isVisible ? styles.toast_show : styles.toast_hidden} ${
        isErrorToast ? styles.toast_error : ''
      }`}
    >
      {message}
    </div>
  );
}
