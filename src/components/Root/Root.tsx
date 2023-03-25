import { Outlet } from 'react-router-dom';
import { WithLocation } from '../../hoc/WithLocation';
import Header from '../Header/Header';

export default function Root() {
  const HeaderWithLocation = WithLocation(Header);
  return (
    <>
      <HeaderWithLocation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
