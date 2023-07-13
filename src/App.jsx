import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';
import Product from './pages/Product';
import { CartProvider } from './CartContext';
import { CssBaseline, Box, Container } from '@mui/material';
import NavBarComponent from './components/NavBarComponent';



function App() {
  return (
    <CartProvider>
      <BrowserRouter>        
          <NavBarComponent></NavBarComponent>
          <Container>
            <Routes>
              <Route index element={<Store />} />
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
              <Route path="product/:id" element={<Product />} />
            </Routes>
        </Container>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;



