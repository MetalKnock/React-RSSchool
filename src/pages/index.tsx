import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../components/Root';
import { RoutePath } from '../shared/config/constants';
import { AboutUs } from './AboutUs';
import { CardMaker } from './CardMaker';
import { Main } from './Main';
import { NotFound } from './NotFound';

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: RoutePath.main,
        element: <Main />,
      },
      {
        path: RoutePath.aboutUs,
        element: <AboutUs />,
      },
      {
        path: RoutePath.cardMaker,
        element: <CardMaker />,
      },
      {
        path: RoutePath.notFound,
        element: <NotFound />,
      },
    ],
  },
]);
