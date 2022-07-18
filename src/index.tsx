import React from 'react';
import ReactDOM from 'react-dom/client';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { StyledEngineProvider } from '@mui/material/styles';


import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*
We add a react context provider Web3ReactProvider
Blockchain provider (library) is an Ethers.js Web3Provider which we can add connector and activate later using hooks.
*/
const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider);
  return library;
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </Web3ReactProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
