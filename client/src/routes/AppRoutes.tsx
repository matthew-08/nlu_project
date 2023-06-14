import React from 'react';
import { Routes, RoutesProps, Route } from 'react-router-dom';
import Capability from '../pages/Capability';
import Home from '../pages/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/capabilities/:capability" element={<Capability />} />
    </Routes>
  );
}

export default AppRoutes;
