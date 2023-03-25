import React from 'react';

import styles from './Toast.module.scss';

interface ToastProps {
  notification: string;
  show: boolean;
}

class Toast extends React.PureComponent<ToastProps> {
  render() {
    const { notification, show } = this.props;
    return (
      <div className={`${styles.toast} ${show ? styles.toast_show : styles.toast_hidden} `}>
        {notification}
      </div>
    );
  }
}

export default Toast;
