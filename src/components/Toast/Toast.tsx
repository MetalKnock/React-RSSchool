import React from 'react';

import styles from './Toast.module.scss';

interface ToastProps {
  notification: string;
  show: boolean;
  isSuccess: boolean;
}

class Toast extends React.PureComponent<ToastProps> {
  render() {
    const { notification, show, isSuccess } = this.props;
    return (
      <div
        className={`${styles.toast} ${show ? styles.toast_show : styles.toast_hidden} ${
          isSuccess ? styles.toast_success : styles.toast_reject
        }`}
      >
        {isSuccess ? notification : 'Error'}
      </div>
    );
  }
}

export default Toast;
