import USDCABI from './ABI/usdc.json';

export const USDC_ADDRESS = process.env.REACT_APP_USDC_ADDRESS || "";

export const USDC_DECIMALS = 6;
export type Asset = 'USDC';

export const ASSET_LIST: {
    [key in Asset] : {
        address: string;
        abi: any;
        decimals: number;
    };
} = {
    USDC: {
        address: USDC_ADDRESS,
        decimals: USDC_DECIMALS,
        abi: USDCABI
    }
};