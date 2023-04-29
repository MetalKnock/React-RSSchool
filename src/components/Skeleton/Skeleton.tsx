import styles from './Skeleton.module.scss';

export default function Skeleton() {
  return (
    <li className={styles.skeleton} data-testid="skeleton">
      <div className={styles.skeleton__image} />
      <div className={styles.skeleton__footer} />
    </li>
  );
}
