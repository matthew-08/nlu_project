import React from 'react';
import { Routes, RoutesProps, Route } from 'react-router-dom';
import Capability from '../pages/Capability';
import Flavor from '../pages/Flavor';
import Flavors from '../pages/Flavors';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/capabilities/:capability" element={<Capability />} />
      <Route path="/flavors" element={<Flavors />} />
      <Route path="/flavors/:flavor" element={<Flavor />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
