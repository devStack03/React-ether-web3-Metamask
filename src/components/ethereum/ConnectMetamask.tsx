import React, { useEffect } from 'react';

import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { UserRejectedRequestError } from '@web3-react/injected-connector';
import { formatAddress } from '../../utils/helper';
import { injected } from '../../utils/connectors';

const ConnectMetamask = () => {

    const { chainId, account, activate, deactivate, setError, active, library, connector } = useWeb3React<Web3Provider>();

    const onClickConnect = () => {
        activate(injected, (error) => {
            if (error instanceof UserRejectedRequestError) {
                // ignore user rejected error
                console.log('user refused');
            } else {
                setError(error);
            }
        }, false);
    };

    const onClickDisconnect = () => {
        deactivate();
    };

    useEffect(() => {
        console.log(chainId, account, active, library, connector);
    })

    return (
        <div>
            <CssBaseline />
            <Container maxWidth="sm">
                <Card variant="outlined">
                    {active && typeof account === 'string' ? (
                        <>
                            <Button onClick={onClickDisconnect}>
                                Account : {formatAddress(account)}
                            </Button>
                            <p>ChainID: {chainId}</p>
                        </>
                    ) : (
                        <>
                            <Button onClick={onClickConnect}>
                                Connect MetaMask
                            </Button>
                            <p>Not connected</p>
                        </>
                    )}
                </Card>
            </Container>
        </div>
    )
}

export default ConnectMetamask;

/*
Explanation of what do we do here:

We get hooks from useWeb3React: chainId, account, activate,deactivate, setError, active,library ,connector

When a user clicks connect, we call activate(injected). inject is InjectedConnector (mostly it means window.ethereum injected by MetaMask) that we can configure.

When user click disconnect, we call decativate().

The library is the Ethers.js Web3Provider we can use.

Specifically, the library is an Ethers.js provider which can be used to connect and read blockchain. If we want to send transaction to blockchain (write), we will need to get Ethers.js signer by call provider.getSigner().
*/
