import { useCallback, useEffect, useState } from 'react'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core';
import { BigNumber, Contract } from 'ethers';
import * as USDC_ABI from '../constants/ABI/usdc.json'
import { formatUnits } from 'ethers/lib/utils';
import { ASSET_LIST, USDC_ADDRESS } from '../constants/contracts';

export const useERC20Balance = () => {

    const { activate, deactivate, account, library, ...restParams } =
    useWeb3React<Web3Provider>();
    const erc20Contract = new Contract(USDC_ADDRESS, ASSET_LIST['USDC'].abi, library);
    const [balance, setBalance] = useState<number>(0);
    console.log(USDC_ADDRESS);
    const fetchERC20Balance = useCallback(() => {
        if (account && erc20Contract) {
            erc20Contract.balanceOf(account).then((value: BigNumber) => {
                const usdcAmount = parseFloat(formatUnits(value.toString(), ASSET_LIST['USDC'].decimals))
                setBalance(usdcAmount);
            }).catch((error: any) => {
                console.log(error);
                setBalance(0);
            });
        }
    }, [account, erc20Contract]);

    useEffect(() => {
        fetchERC20Balance();
        const interval = setInterval(() => {
            fetchERC20Balance()
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [fetchERC20Balance]);

    return [balance, fetchERC20Balance];
}