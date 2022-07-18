import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'
import useSWR from 'swr'

const fetcher = (library: any) => (...args: any) => {
    const [method, ...params] = args;
    return library[method](...params)
}

const ETHBalanceSWR = () => {
    const [etchBalance, setEthBalance] = useState<number | undefined>(undefined)
    const { account, active, library, chainId } = useWeb3React<Web3Provider>();
    const { data: balance, mutate } = useSWR(['getBalance', account, 'latest'], {
        fetcher: fetcher(library),
    });
    console.log('ETHBalanceSWR', balance);
    useEffect(() => {
        if (!library) return;

        //listen for changes on an Ethereum address
        console.log(`listening for blocks...`)
        library.on('block', () => {
            console.log('update balance...')
            mutate(undefined, true);
        })

        //remove listener when the component is unmounted
        return () => {
            library.removeAllListeners('block')
        }
    }, [library]);

    return (
        <div>
            {active && balance ? (
                <p>ETH in account: {parseFloat(formatEther(balance)).toFixed(3)} {chainId===31337 ? 'Test':''} ETH</p>
            ) : (
                <p>ETH in account:</p>
            )}
        </div>
    )
}

export default ETHBalanceSWR;

/*
The problem with this is how to constantly sync the results (ETH balance) with blockchain. Lorenzo Sicilia suggests to use SWR with events listening to get data more efficiently. The SWR project homepage says:

SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.

With SWR, components will get a stream of data updates constantly and automatically. The UI will always be fast and reactive.
We use SWR to fetch data, which calls provider.getBalance( address [ , blockTag = latest ] ) (Ethers docs link). The library is a web3 provider.

We get mutate of SWR to change its internal cache in the client. We mutate balance to undefined in every block, so SWR will query and update for us.

When library(provider) changes and we have a provider, the side effect (useEffect()) will add a listener to blockchain new block event. Block events are emitted on every block change.
*/