import React from 'react';
import {products} from '../productsStore';
import ProductCard from '../components/ProductCard';
import '../style.css';
import { Grid, Box } from '@mui/material';

function Store() {

  return (
    <>
      <Box className='container-box'>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}>
          <h3>Trending</h3>
        </div>
        <Grid container rowSpacing={{ xs: 4}} columnSpacing={{ xs: 1, sm: 2, lg: 8}} sx={{
          marginBottom: '2rem'        
        }} >
          {products.map((product, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4} lg={4} className='xs-center'>
              <ProductCard product={product} />
            </Grid>      
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Store;