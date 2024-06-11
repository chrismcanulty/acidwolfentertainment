import { useDispatch, useSelector } from 'react-redux';
import { Badge, Box, IconButton, Typography } from '@mui/material';
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';
import { shades } from '../../theme';
import { setIsCartOpen } from '../../state';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="200px"
      backgroundColor="rgba(255, 255, 255, 0.95"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="85%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate('/')}
          sx={{ '&:hover': { cursor: 'pointer' } }}
          color={shades.secondary[500]}
        >
          <Box display="flex" flexDirection="row" alignItems="center">
            <img
              alt="logo"
              width="200px"
              height="200px"
              src={require('../../assets/logo/AcidWolfLogo.jpg')}
            />
            <Typography ml="20px" variant="h3">
              ACID WOLF ENTERTAINMENT
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: 'black' }}>
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton sx={{ color: 'black' }}>
            <img
              alt="kindle"
              width="25px"
              height="25px"
              src={require('../../assets/icons/Kindle.png')}
              style={{ borderRadius: '5px' }}
            />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              '& .MuiBadge-badge': {
                right: 5,
                top: 5,
                padding: '0 4px',
                height: '14px',
                minWidth: '13px',
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: 'black' }}
            >
              <ShoppingBagOutlined fontSize="large" />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: 'black' }}>
            <MenuOutlined fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
