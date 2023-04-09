import React from 'react';
import styles from './Skeleton.module.scss';

export default function Skeleton() {
  return (
    <li className={styles.skeleton}>
      <div className={styles.skeleton__image}>{}</div>

      <div className={styles.skeleton__footer}>{}</div>
    </li>
  );
}
