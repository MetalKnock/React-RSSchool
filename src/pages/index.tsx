import { Route, Routes } from 'react-router-dom';
import { Root } from '../components/Root';
import { RoutePath } from '../shared/config/constants';
import { AboutUs } from './AboutUs';
import { CardMaker } from './CardMaker';
import { Main } from './Main';
import { NotFound } from './NotFound';

export default function Router() {
  return (
    <Routes>
      <Route path="" element={<Root />}>
        <Route path={RoutePath.main} element={<Main />} />
        <Route path={RoutePath.aboutUs} element={<AboutUs />} />
        <Route path={RoutePath.cardMaker} element={<CardMaker />} />
        <Route path={RoutePath.notFound} element={<NotFound />} />
      </Route>
    </Routes>
  );
}
