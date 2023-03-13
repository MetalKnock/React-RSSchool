import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';
import { RoutePath } from '../shared/config/constants';
import { AboutUs } from './AboutUs';
import { Main } from './Main';
import { NotFound } from './NotFound';

export default function Routing() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={RoutePath.main} element={<Main />} />
        <Route path={RoutePath.aboutUs} element={<AboutUs />} />
        <Route path={RoutePath.notFound} element={<NotFound />} />
      </Routes>
    </>
  );
}
