import { Outlet } from 'react-router-dom';
import { WithLocation } from '../../hoc/WithLocation';
import Header, { HeaderProps } from '../Header/Header';

export default function Root() {
  const HeaderWithLocation = WithLocation<HeaderProps>(Header);
  return (
    <>
      <HeaderWithLocation />
      <Outlet />
    </>
  );
}
