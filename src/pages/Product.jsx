import React, {useContext, useState} from 'react';
import { products, getProductData } from '../productsStore';
import { useParams } from 'react-router-dom';
import {CartContext} from '../CartContext';
import {Button as MuiButton} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Rating from '@mui/material/Rating';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

function ProductPage() {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const product = getProductData(parseInt(id));
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  const handleBackArrow = () => {
    navigate('/');
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>      
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
    <Container className='mt-5'>
      <IconButton aria-label='back' onClick={handleBackArrow} size='small' >
        <ArrowBackIosNewRoundedIcon className='my-3'/>
      </IconButton>
      <Row>
        <Col>
          <Carousel prevIcon={null} nextIcon={null} variant="dark" className='carousel'>
            <Carousel.Item className=''>
              <img
                className="d-block carousel-img"
                src={product.src1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block carousel-img"
                src={product.src2}
                alt="Second slide"
              />            
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block carousel-img"
                src={product.src3}
                alt="Third slide"
              />            
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block carousel-img"
                src={product.src4}
                alt="Third slide"
              />            
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className='mt-4 mt-md-0'>
          <div className="d-flex justify-content-between">
            <h3 className=''>{product.title}</h3>   
            <h3><small>$</small>{product.price}</h3>
          </div>
          
          <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
          <form onSubmit={(e) => {
            e.preventDefault();
            cart.addOneToCart(product.id, e.target.sizeInput.value);
            setOpen(true);
          }}>             
            <FormControl sx={{ marginTop: 2, marginBottom: 2, minWidth: 180, maxWidth: 200 }} size="small">
              <InputLabel id="select-size-label">Size</InputLabel>
              <Select
                labelId="select-size-label"
                id="select-size"
                name="sizeInput"
                label="Size"   
                defaultValue=""   
              >
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="9">9</MenuItem>
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="11">11</MenuItem>
                <MenuItem value="12">12</MenuItem>
                <MenuItem value="13">13</MenuItem>
              </Select>
            </FormControl>
            <br></br>
            <div className="">
              <MuiButton type='submit' className='purchase-btn' variant="contained">Add to Cart</MuiButton>        
            </div>
          </form> 
        </Col>
      </Row>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={`${product.title} was added to your cart!`}
        action={action}
      />
    </Container>
    </>
  );
}

export default ProductPage;