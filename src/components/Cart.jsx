import React, {useContext, useState} from 'react';
import {Button as MuiButton} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Badge from '@mui/material/Badge';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import 'bootstrap/dist/css/bootstrap.min.css';


import { CartContext } from '../CartContext';
import { products, getProductData } from '../productsStore';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function CartItems(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(parseInt(id));

  return (
    <>      
      <ListItem  className=''>
        <Container className='col-lg-6'>
          <Row className=' justify-content-center'>
            <Col className='col-auto col-lg-2 '>
              <img src={productData.src} className='cart-img-preview' ></img>
            </Col>
            <Col className='col-6 col-lg-8 ms-'>
              <h5>{productData.title}</h5>
              <p className='my-0'>Size: {props.sizeInput}</p>
              <p className='my-0'>Price: <small>$</small>{productData.price}</p>
              {quantity > 1 ? 
                  <>
                    <p className='mb-0'>Quantity: {quantity}</p>
                  </>
                  : null }
            </Col>
            <Col className='col-2'>
              <div className="text-end ms-3">
                <IconButton aria-label="delete" color='error' onClick={() => cart.deleteFromCart(productData.id)}>              
                  <DeleteForeverRoundedIcon />
                </IconButton>
              </div>
            
            </Col>            
          </Row>
        </Container>
      </ListItem>
      <div className="d-lg-flex justify-content-center">
        <Divider className=' col-lg-6'/>                
      </div>
       
    </>
  );
}