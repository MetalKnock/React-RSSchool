import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import NotFound from './NotFound';

export default function Routing() {
  return (
    <Routes>
      <Route path="about-us" element={<AboutUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
