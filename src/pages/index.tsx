import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../components/Root';
import { RoutePath } from '../shared/config/constants';
import { AboutUs } from './AboutUs';
import { Form } from './Form';
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
        path: RoutePath.formPage,
        element: <Form />,
      },
      {
        path: RoutePath.notFound,
        element: <NotFound />,
      },
    ],
  },
]);
