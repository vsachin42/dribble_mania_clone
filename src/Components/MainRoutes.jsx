import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Admin from '../Pages/Admin';
import Login from '../Pages/Login';
import Product from '../Pages/Product';
import SignUp from '../Pages/SignUp';
import SingleProductPage from '../Pages/SingleProductPage';
import PageNotFound from '../Pages/PageNotFound';
import privateRoute from './privateRoute';

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/products" element={<Product/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/product/:id" element={
              <privateRoute>
                <SingleProductPage />
              </privateRoute>
            }></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
    </div>
  );
};

export default MainRoutes;