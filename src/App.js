import './App.css';
import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/auth/login';
import Landing from './pages/landing/landing';
import RequireAuth from './utils/helpers/auth/requireAuth';
import Dashboard from './pages/dashboard/dashboard';
import NoMatch from './pages/noMatch';
import Home from './pages/dashboard/home';
import Products from './pages/dashboard/products';
import CreateProduct from './pages/dashboard/createProduct';
import ComingSoon from './pages/comingSoon';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      >
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='products/create-product' element={<CreateProduct />} />
        <Route path="*" element={<ComingSoon />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
