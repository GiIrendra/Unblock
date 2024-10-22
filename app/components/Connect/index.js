"use client";

import React, { useContext, useEffect, useState, useCallback } from "react";
import { ethers } from "ethers";
// import moment from "moment";

import style from "./style.module.css";
import { myContext } from "@/app/page";

import { easeOut, motion } from "framer-motion";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ABI from "../abi";

const Connect = ({ setAdminFlag }) => {
  //-----------------------using ether and connectin

  const { contract, setContract, walletAddress, setWalletAddress } =
    useContext(myContext);
  const [OwnerAdd, seOwnerAdd] = useState("");

  const connectminewallet = useCallback(async () => {
    try {
      if (
        typeof window != "undefined" &&
        typeof window.ethereum != "undefined"
      ) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // npm i -S ethers@5.7.2
        // const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        // "0x3e1a39f854543839aeb7b1af66d2635e66a5c779",
        const contract = new ethers.Contract(
          "0x60c3c70baaffce91a3f28feff086f839f5788739",
          ABI,
          signer
        );
        setContract(contract);
        let owner = await contract.owner();
        seOwnerAdd(owner.toLocaleLowerCase());
      } else {
        // console.log("Please install MetaMask");
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [setContract]);

  const connectWallet = useCallback(async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]); // Update wallet address
      } catch (err) {
        console.error(err.message);
      }
    } else {
      toast("Please install MetaMask!");
    }
  }, [setWalletAddress]); // Include setWalletAddress

  const getCurrentWalletConnected = useCallback(async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]); // Update wallet address
        }
      } catch (err) {
        console.error(err.message);
      }
    }
  }, [setWalletAddress]); // Include setWalletAddress

  const addWalletListener = useCallback(async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]); // Update wallet address
        } else {
          setWalletAddress("");
          toast(`User logged out from MetaMask`);
        }
      });
    }
  }, [setWalletAddress]);

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
    connectminewallet();
  }, [
    walletAddress,
    getCurrentWalletConnected,
    addWalletListener,
    connectminewallet,
  ]);

  const goToAdmin = () => {
    if (contract == "") {
      toast.warning("Please click on Connect Wallet");
      return;
    }
    if (walletAddress == OwnerAdd) {
      setAdminFlag(true);
    } else {
      toast.warn("Oops! Only the owner can proceed!");
    }
  };
  return (
    <>
      <div className={style.container}>
        <motion.button
          layout
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: [0, 100, 0], opacity: 1, rotate: 360 }}
          whileHover={{ scale: 1.2 }}
          transition={{
            duration: 0.3,
            delay: 0.2,
            ease: easeOut,
          }}
          onClick={connectWallet}
          className={style.Connect}
        >
          <span className={style.buttonText}>
            {walletAddress && walletAddress.length > 0
              ? `Connected: ${walletAddress.substring(
                  0,
                  6
                )}...${walletAddress.substring(38)}`
              : "Connect Wallet  🦊"}
          </span>{" "}
        </motion.button>

        <motion.button
          layout
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={goToAdmin}
          className={`${style.ApproveEvent}`}
        >
          <h3>Admin</h3>
        </motion.button>
        {/* To able to use React-Toastify, need to put below container in jsx like this, then call for toast("alert") */}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
};

export default Connect;
