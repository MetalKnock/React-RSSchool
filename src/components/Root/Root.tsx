import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Toast } from '../Toast';
import styles from './Root.module.scss';

export default function Root() {
  return (
    <>
      <Header />
      <main className={styles.root}>
        <Outlet />
      </main>
      <Toast />
    </>
  );
}
