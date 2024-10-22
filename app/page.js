"use client";
import { createContext, useState } from "react";
import dynamic from "next/dynamic"; // Dynamic import for components that use browser-specific features

import Connect from "./components/Connect";
import Admin from "./components/Admin";
import ApproveEvent from "./components/ApproveEvent";
// import ActiveEvents from "./components/ActiveEvents";
import MenuePath from "./components/MenuePath";
// import RegisterEvent from "./components/ReginsterEvent";
import style from "./page.module.css";
import { motion } from "framer-motion";

// Dynamically import Lottie to ensure it only runs on the client-side
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ActiveEvents = dynamic(() => import("./components/ActiveEvents"), { ssr: false });
const RegisterEvent = dynamic(() => import("./components/ReginsterEvent"), { ssr: false });


// Import animation data
import partyboy from "./assets/partyBoy1.json";

export const myContext = createContext();

export default function Home() {
  const [contract, setContract] = useState("");
  const [backBringReg, setBackBringReg] = useState(false);
  const [backBringActiveEvents, setBackBringActiveEvents] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [adminFlag, setAdminFlag] = useState(false);

  // Log contract details for debugging purposes
  console.log(contract);

  return (
    <myContext.Provider
      value={{ contract, setContract, walletAddress, setWalletAddress }}
    >
      {adminFlag ? "" : <ApproveEvent />}
      {/* Admin view logic */}
      {adminFlag ? "" : <Connect setAdminFlag={setAdminFlag} />}
      {adminFlag ? <Admin setAdminFlag={setAdminFlag} /> : ""}

      {/* Ensure Lottie animation only runs in the client */}
      <motion.div layout className={style.partyboii}>
        <Lottie
          style={{
            position: "relative",
            left: "-70%",
            marginTop: "-20vh",
            width: "40em",
            height: "100vh",
          }}
          speed="0.3"
          animationData={partyboy}
          loop={true}
          autoplay={true}
        />
      </motion.div>
      <MenuePath
        backBringReg={backBringReg}
        setBackBringReg={setBackBringReg}
        setBackBringActiveEvents={setBackBringActiveEvents}
      />
      {backBringReg ? <RegisterEvent setBackBringReg={setBackBringReg} /> : ""}
      {backBringActiveEvents ? (
        <ActiveEvents setBackBringActiveEvents={setBackBringActiveEvents} />
      ) : (
        null
      )}

      <div className={style.HomeMainImg}></div>
    </myContext.Provider>
  );
}
