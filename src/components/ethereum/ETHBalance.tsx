import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'

const ETHBalance = () => {
    const [etchBalance, setEthBalance] = useState<number | undefined>(undefined)
    const { account, active, library, chainId } = useWeb3React<Web3Provider>();
    const provider = library;

    useEffect(() => {
        if (active && account) {
            provider?.getBalance(account).then((result) => {
                setEthBalance(Number(formatEther(result)))
            })
        }
    });

    return (
        <div>
            {active ? (
                <p>ETH in account: {etchBalance?.toFixed(3)} {chainId===31337 ? 'Test':''} ETH</p>
            ) : (
                <p>ETH in account:</p>
            )}
        </div>
    )
}

export default ETHBalance;

/*
The problem with this is how to constantly sync the results (ETH balance) with blockchain. Lorenzo Sicilia suggests to use SWR with events listening to get data more efficiently. The SWR project homepage says:

SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.

With SWR, components will get a stream of data updates constantly and automatically. The UI will always be fast and reactive.
*/