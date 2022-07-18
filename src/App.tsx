import React from 'react';
import ConnectMetamask from './components/ethereum/ConnectMetamask';
import './App.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import ETHBalance from './components/ethereum/ETHBalance';
import ETHBalanceSWR from './components/ethereum/ETHBalanceSWR';
import ReadERC20 from './components/ethereum/ReadERC20';
const addressContract='0x5fbdb2315678afecb367f032d93f642f64180aa3'


function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              DApp Tutorial
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <ConnectMetamask />
      <ETHBalance />
      <ETHBalanceSWR />
      <ReadERC20 addressContract={addressContract} />
    </div>
  );
}

export default App;
