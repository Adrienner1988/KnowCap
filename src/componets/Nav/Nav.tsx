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
import { MdOutlineAddAPhoto } from "react-icons/md";


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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (typeof user.email === 'string') {
          setUser({
            uid: user.uid,
            email: user.email
          });
        } else {
          console.error('Invalid email type');
        }
      } else {
        setUser({
          uid: '',
          email: ''
        })
      }
    });

    return () => unsubscribe();
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
                <div>
                <Link to={'/'} key={'meaning'} >
            
                  <Typography textAlign="center">Home</Typography>
                </Link>
                </div>
              </MenuItem>

              <MenuItem onClick={handleCloseUserMenu}>
              <div>
                <Link to={'/search'} key={'search'}>
                  <Typography textAlign="center">Product Search </Typography>
                </Link>
                </div>
              </MenuItem>

              <MenuItem onClick={handleCloseUserMenu}>
              <div>
                <Link to={'/post'} key={'post'}>
                  <Typography textAlign="center"><MdOutlineAddAPhoto /></Typography>
                </Link>
                </div>
              </MenuItem>

              <MenuItem onClick={handleCloseUserMenu}>
              <div>
                <Link to={'/beat'} key={'thebeat'}>
                  <Typography textAlign="center">The Beat</Typography>
                </Link>
                </div>
              </MenuItem>

              <MenuItem onClick={handleCloseUserMenu}>
              <div>
                <Link to={'/profile'} key={'profile'}>
                  <Typography textAlign="center">Profile</Typography>
                </Link>
                </div>
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
          <div>
            <Link
              key={'message'}
              onClick={handleCloseNavMenu}
              to={'/'}
              className='text-light me-3'>
              Home</Link>
              </div>
              <div>
            <Link
              key={'search'}
              onClick={handleCloseNavMenu}
              to={'/search'}
              className='text-light me-3'>Product Search</Link>
              </div>

              <div>
            <Link key={'post'}
            onClick={handleCloseNavMenu}
            to={'/post'}
            className='text-light me-3'><MdOutlineAddAPhoto />
            </Link>
            </div>

            <div>
            <Link
              key={'thebeat'}
              onClick={handleCloseNavMenu}
              to={'/beat'}
              className='text-light me-3'>The Beat</Link>
              </div>

              <div>
              <Link
              key={'profile'}
              onClick={handleCloseNavMenu}
              to={'/profile'}
              className='text-light me-3'>Profile</Link>
              </div>
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
                <div>
                  <Typography textAlign="center">{user.email}</Typography>
                  </div>

                  <div>
                  <Link to={'/login'} onClick={handleSignOut} key={'logout'}>
                    <Typography textAlign="center">Log Out</Typography>
                  </Link>
                  </div>
                </>
              ) : (
                <div>
                <Link to={'/login'} key={'login'}>
                  <Typography textAlign="center">Log In</Typography>
                </Link>
                </div>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav


