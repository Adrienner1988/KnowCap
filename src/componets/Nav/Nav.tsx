import './Nav.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useState } from 'react';
import { useEffect } from 'react';


interface IUser {
  uid: string,
  email: string
};

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [user, setUser] = useState<IUser>({
    uid: '',
    email: ''
  })


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Tracking current user
  useEffect(() => {
    const authenticate = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (typeof user.email === 'string') {
          setUser({
            uid: user.uid,
            email: user.email
          });
        } else {
          console.error('Invalid email type');
        }
      }
      // Do nothing when the user is not authenticated, keep the existing user state
    });

    return () => authenticate();
  }, []);


  // Sign out user
  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({
        uid: '',
        email: ''
      })
    }).catch((error) => {
      console.error(error);
    });

  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl" className='appBar'>
        <Toolbar disableGutters>
          {/* Shrink nav bar */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
              onClose={handleCloseNavMenu}>

              <MenuItem onClick={handleCloseUserMenu}>
                <Link to={'/'} key={'meaning'} >
                  <Typography textAlign="center">Home</Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseUserMenu}>
                <Link to={'/search'} key={'search'}>
                  <Typography textAlign="center">Product Search</Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseUserMenu}>
                <Link to={'/beat'} key={'thebeat'}>
                  <Typography textAlign="center">The Beat</Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseUserMenu}>
                <Link to={'/profile'} key={'profile'}>
                  <Typography textAlign="center">Profile</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
         
         {/* main nav section */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              flexGrow: 1,
              fontWeight: 700,
              textDecoration: 'none',
            }}>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link
              key={'message'}
              onClick={handleCloseNavMenu}
              to={'/'}
              className='text-light me-3'>
              Home</Link>

            <Link
              key={'search'}
              onClick={handleCloseNavMenu}
              to={'/search'}
              className='text-light me-3'>Product Search</Link>

            <Link
              key={'thebeat'}
              onClick={handleCloseNavMenu}
              to={'/beat'}
              className='text-light me-3'>The Beat</Link>
          </Box>

          {/* profile picture, log in and out */}
          <Box sx={{ flexGrow: 0 }}>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>

              {user ? (
                <>
                  <Typography textAlign="center">{user.email}</Typography>

                  <Link to={'/profile'} key={'profile'}>
                    <Typography textAlign="center">Profile</Typography>
                  </Link>

                  <Link to={'/login'} onClick={handleSignOut} key={'logout'}>
                    <Typography textAlign="center">Log Out</Typography>
                  </Link>
                </>
              ) : (
                <Link to={'/login'} key={'login'}>
                  <Typography textAlign="center">Log In</Typography>
                </Link>
              )}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav


