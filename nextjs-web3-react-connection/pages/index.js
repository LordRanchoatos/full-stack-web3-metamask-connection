import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { abi } from "../Constants/abi"
import { ethers } from 'ethers'

const injected = new InjectedConnector();

export default function Home() {
  const { activate, active, library: provider } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (e) {
      console.log(e);
    }
  }

  async function execute() {
    if (active) {
      const signer = provider.getSigner();
      const contractAddress = "0xE08BFF3747Ea35F9Df9f5F0B90f3c618Bc418535";
      const contract = new ethers.Contract(contractAddress, abi, signer) 
      try {
        await contract.store(42);
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div>
      {active ? (
        <>
          "Connected!" <button onClick={() => execute()}>Execute</button>
        </>
      ) : (
        <button onClick={() => connect()}>Connect</button>
      )}
    </div>
  );
}
