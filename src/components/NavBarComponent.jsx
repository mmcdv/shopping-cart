import React, {useContext, useState} from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router';
import '../style.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import {Button as MuiButton} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Dialog from '@mui/material/Dialog';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Slide from '@mui/material/Slide';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import CartItems from './Cart';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#ea5c2d', 
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function NavBarComponent() {
  const cart = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  

  const handleContinueShopping = () => {
    handleClose();
    navigate('/');
  };


  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' } }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <MuiButton              
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >Nike</MuiButton>
              <MuiButton              
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >Jordan</MuiButton>
              <MuiButton              
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >Adidas</MuiButton>          
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton aria-label="cart" onClick={handleClickOpen} sx={{ p: 0 }}>
              <StyledBadge badgeContent={productsCount} showZero color="secondary">
                <ShoppingCartIcon className='cart-icon' />                
              </StyledBadge>
            </IconButton>            
          </Box>
        </Toolbar>        
      </Container>
    </AppBar>   
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Checkout
          </Typography>
        
        </Toolbar>
      </AppBar>
      <List>
      { productsCount > 0 ?
        <>
          {cart.items.map((currentProduct, idx) => (
            <CartItems key={idx} id={currentProduct.id} quantity={currentProduct.quantity} sizeInput={currentProduct.shoeSize} />            
          ))}
          
        </>
        :
          <h4 style={{
            marginLeft: 15
          }}>There are no items in your cart!</h4>
      }        
            
      </List>      
      {productsCount > 0 ?

      <div className="d-md-flex justify-content-md-center mt-3">
        <div className="col-12 col-md-8 col-lg-6 px-4">
          <div className="d-flex justify-content-between ">
            <h4 className='text-muted my-auto'>TOTAL:</h4>
            <h2 className=''><small>$</small>{cart.getTotalCost().toFixed(2)}</h2>
          </div>
          <div className='mt-3 d-flex justify-content-between'>
            <div className="">
              <MuiButton size='large' className='shopping-btn' onClick={handleContinueShopping} variant='outlined'>Continue Shopping</MuiButton>    
            </div>
            <div className="">
              <MuiButton size='large' className='purchase-btn' variant='contained'>Purchase</MuiButton>  
            </div>                      
          </div>
        </div>              
      </div>

      : null }      
    </Dialog> 
    </>
  );
}

export default NavBarComponent;



const pages = ['Shop Now', 'Account', 'Sign In'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
