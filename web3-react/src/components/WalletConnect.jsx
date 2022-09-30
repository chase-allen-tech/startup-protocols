import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { providers } from "ethers";
import { useState, useEffect } from 'react';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

const WalletConnect = () => {

  const [web3Modal, setWeb3Modal] = useState(null);
  const [address, setAddress] = useState('');
  const [library, setLibrary] = useState({});

  useEffect(() => {
    const providerOptions = {
      coinbasewallet: {
        package: CoinbaseWalletSDK,
        options: {
          appName: "Web3 Modal Demo",
          infraId: process.env.REACT_APP_INFRA_SECRET
        }
      },
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infraId: process.env.REACT_APP_INFRA_SECRET
        }
      }
    };

    const newWeb3Modal = new Web3Modal({
      cacheProvider: true,
      network: 'mainnet',
      providerOptions: providerOptions
    });

    setWeb3Modal(newWeb3Modal);
  }, []);

  useEffect(() => {
    // Connect automatically and without a popup if user is already connected
    if (web3Modal && web3Modal.cacheProvider) {
      onConnectWallet();
    }
  }, [web3Modal]);

  const addListeners = (provider) => {
    provider.on("accountsChanged", accounts => window.location.reload());
    provider.on("chainChanged", chainId => window.location.reload());
    provider.on("disconnect", () => console.log('[disconnected!]'));
  };

  const onConnectWallet = async () => {
    const provider = await web3Modal.connect();
    addListeners(provider);

    const library = new providers.Web3Provider(provider);
    setLibrary(library);

    const userAddress = await library.getSigner().getAddress();
    setAddress(userAddress);
  };

  const onDisconnectWallet = async () => {
    await web3Modal.clearCachedProvider();
  }

  return <div className="w-full flex flex-col items-center mt-8">
    <button className="bg-red-400 px-8 py-2 rounded text-white text-xl" onClick={onConnectWallet}>Connect</button>
    <button className="bg-red-400 px-8 py-2 rounded text-white text-xl mt-2" onClick={onDisconnectWallet}>Disconnect</button>
    <div>{address}</div>
  </div>;
};

export default WalletConnect;