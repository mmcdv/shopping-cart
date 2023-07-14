import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Store from './pages/Store';
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
              <Route path="product/:id" element={<Product />} />
            </Routes>
        </Container>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;



