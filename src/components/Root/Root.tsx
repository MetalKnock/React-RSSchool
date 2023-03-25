import { Outlet } from 'react-router-dom';
import { WithLocation } from '../../hoc/WithLocation';
import Header from '../Header/Header';
import styles from './Root.module.scss';

export default function Root() {
  const HeaderWithLocation = WithLocation(Header);
  return (
    <>
      <HeaderWithLocation />
      <main className={styles.root}>
        <Outlet />
      </main>
    </>
  );
}
