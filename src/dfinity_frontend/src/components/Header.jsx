import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Typography,
  IconButton,
  Toolbar,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Home', 'My Pets', 'Marketplace'];

function Header() {
  const [userMenu, setUserMenu] = useState(false);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const isConnected = async () => {
      const result = await window.ic.plug.isConnected();
      if (result) setConnected(true);
    };

    isConnected();
  }, []);

  const handleOpenNavMenu = () => {
    setUserMenu(!userMenu);
  };

  const handleConnect = async () => {
    await window.ic.plug.requestConnect();
    setConnected(true);
  };

  return (
    <Box>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleOpenNavMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Top 1 Hackathon
          </Typography>
          {connected ? (
            <Button color="inherit">Connected</Button>
          ) : (
            <Button color="inherit" onClick={handleConnect}>
              Connect
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}

export default Header;
