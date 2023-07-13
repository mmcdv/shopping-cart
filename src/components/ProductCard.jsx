import React, {useContext} from 'react';
import {CartContext} from '../CartContext';
import '../style.css';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, Stack, CardContent, CardMedia, Typography, CardActionArea, IconButton } from '@mui/material';
import Rating from '@mui/material/Rating';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Button as MuiButton } from '@mui/material';

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  const navigate = useNavigate();
  
  const handleViewMore = () => {
    navigate('/Product/' + product.id);
  };

  return (
    <>    
      <Card sx={{ minWidth: 380, maxWidth: 380, borderRadius: 5 }}>
        <CardActionArea onClick={handleViewMore}>
          <CardMedia
            component="img"
            height="240"            
            image={product.src}
            alt={`${product.title}`}
          />
          <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
          >
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant='h5'>
                ${product.price}
              </Typography>
            </Stack>
            <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />        
            <div className="">
              <ArrowForwardIosRoundedIcon fontSize='small' />
            </div>                
          </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </>  
  );
};

export default ProductCard;