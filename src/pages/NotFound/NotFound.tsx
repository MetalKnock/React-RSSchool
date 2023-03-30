import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={`${styles.notFound} container`}>
      <h1 className={styles.notFound__title}>404</h1>
      <h2>Page not found</h2>
    </div>
  );
}
