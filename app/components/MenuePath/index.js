"use client";
import React,{useContext} from "react";
import style from "./style.module.css";
import { motion} from "framer-motion";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { myContext } from "@/app/page";
const Index = ({setBackBringReg,setBackBringActiveEvents}) => {
  const { contract,walletAddress} = useContext(myContext);
    // -------------------------------------------------js to move register event form
    async function RegisterEvent() {
      if(contract==""){
        toast.warning("Please click on Connect Wallet");
        return;
      }
      let check =await contract.clubAddress();
      if(walletAddress==check.toLocaleLowerCase()){
        setBackBringReg(true);
      }else{
        toast.warn("Only the club can propose an event!")
        return;
      }
    }
    function gotoActiveEvents(){
      if(contract==""){
        toast.warning("Please click on Connect Wallet");
        return;
      }
      setBackBringActiveEvents(true);
    }
  return (
    <>
      <div className={style.HomeMainOption}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          onClick={RegisterEvent}
          className={style.RegEvent}
        >
          Register For Event
        </motion.button>

        <motion.div
          whileHover={{ scale: 1.2 }}
          className={style.ActiveEvent}
          style={{ textDecoration: "none", color: "white" }}
          onClick={gotoActiveEvents}
        >
          Active Events
        </motion.div>
      </div>
    </>
  );
};

export default Index;
