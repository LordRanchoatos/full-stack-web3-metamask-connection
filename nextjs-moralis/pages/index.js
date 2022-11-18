import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useMoralis, useWeb3Contract } from 'react-moralis';
import { abi } from '../../Constants/abi';

export default function Home() {
  const { enableWeb3, isWeb3Enabled } = useMoralis();
  const { runContractFunction } = useWeb3Contract({
    abi: abi,
    contractAddress: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    // contractAddress: '0xE08BFF3747Ea35F9Df9f5F0B90f3c618Bc418535',
    functionName: 'store',
    params: {
      _favoriteNumber: 42,
    },
  });
  return (
    <div>
      {isWeb3Enabled ? ( 
        <div>
          "Connected "{' '}
          <button onClick={() => runContractFunction()}>Execute</button>
        </div>
      ) : (
        <button onClick={() => enableWeb3()}>Connect</button>
      )}
    </div>
  );
}
