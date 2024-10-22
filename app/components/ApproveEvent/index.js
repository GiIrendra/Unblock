"use client";

import React, { useContext, useState, useEffect } from "react";
import style from "./style.module.css";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { myContext } from "@/app/page";

const Index = () => {
  const { contract, walletAddress } = useContext(myContext);
  const [stdCabinet, setStdCabinet] = useState(null);
  const [faculty, setFaculty] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [IT, setIT] = useState(null);

  //-----
  const [facultyStatus, setFacultyStatus] = useState(false);
  const [cabinetStatus, setCabinetStatus] = useState(false);
  const [adminStatus, setAdminStatus] = useState(false);
  // const [itStatus, setItStatus] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        // Fetch contract data
        const stdCabinet = await contract.studentCabinet();
        const faculty = await contract.faculty();
        const admin = await contract.admin();
        const itDepartment = await contract.itDepartment();
  
        // Update state variables, ensuring to use lowercase for consistency
        setStdCabinet(stdCabinet.toLocaleLowerCase());
        setFaculty(faculty.toLocaleLowerCase());
        setAdmin(admin.toLocaleLowerCase());
        setIT(itDepartment.toLocaleLowerCase());
      } catch (error) {
        toast.error("Failed to fetch data from contract."); // Inform the user about the error
      }
    })();
  }, [contract]);

  function ApproveEventBoard() {
    if (!contract) { // Changed from checking for empty string to null check
      toast.warning("Please click on Connect Wallet");
      return;
    }
    const board = document.getElementById("board");
    const isMobileView = window.matchMedia("(max-width: 768px)").matches;

    const desktopPosition = "83%";
    const desktopHidden = "110%";
    const mobilePosition = "25%";
    const mobileHidden = "110%"; // You can tweak this if needed for mobile hiding

    // ------------------------------------Checking right person to enter on Approval
    if (
      walletAddress === stdCabinet ||
      walletAddress === faculty ||
      walletAddress === admin ||
      walletAddress === IT
    ) {
      const currentRight = board.style.right;

      // -------------Toggle board's position based on the current state and screen size
      if (isMobileView) {
        board.style.right =
          currentRight === mobilePosition ? mobileHidden : mobilePosition;
      } else {
        board.style.right =
          currentRight === desktopPosition ? desktopHidden : desktopPosition;
      }
      (async () => {
        const { facultyStatus, cabinetStatus, adminStatus, itStatus } =
          await contract.getApprovalStatus();
        setFacultyStatus(facultyStatus);
        setAdminStatus(adminStatus);
        setCabinetStatus(cabinetStatus);
        // setItStatus(itStatus);
        if (facultyStatus != 0) {
          document.getElementById("BtnFac").style.display = "none";
        }
        if (cabinetStatus != 0) {
          document.getElementById("btnCabi").style.display = "none";
        }
        if (adminStatus != 0) {
          document.getElementById("btnAdm").style.display = "none";
        }
        if (itStatus != 0) {
          document.getElementById("btnIT").style.display = "none";
        }
      })();
    } else {
       toast(`You are not authorised!`);
    }
  }
  // -------------------------------------Handling to response of respective Authorizer fro event hosting
  const successForA = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  const errprForR = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  const warnForWrong = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  const notify1 = () =>
    toast.success("You have successfully approved the event", successForA);
  const notify2 = () => toast.error("You have rejected the event", errprForR);
  const notify3 = (value) => toast.error(value, errprForR);

  const facultyResp = async () => {
    if (walletAddress == faculty) {
      let resp = window.confirm(
        "Do you want to approve current event on Board?"
      );
      try {
        if (resp) {
          notify1();
          await contract.approveByFaculty(resp);
        } else {
          notify2();
          await contract.approveByFaculty(resp);
        }
      } catch (error) {
        toast.warn(error.message);
        return;
      }
      document.getElementById("BtnFac").style.display = "none";
    } else {
      notify3("Only faculty can approve from here...");
    }
  };

  async function cabinetResp() {
    if (facultyStatus != 0) {
      if (walletAddress == stdCabinet) {
        let resp = window.confirm(
          "Do you want to approve current event on Board?"
        );
        try {
          if (resp) {
            notify1();
            await contract.approveByCabinet(resp);
          } else {
            notify2();
            await contract.approveByCabinet(resp);
          }
        } catch (error) {
          toast.warn(error.message);
          return;
        }

        document.getElementById("btnCabi").style.display = "none";
      } else {
        notify3("Only StdCabinet can approve from here...");
      }
    } else {
      notify3("Please approve from faculty first...");
    }
  }
  async function adminResp() {
    if (cabinetStatus != 0) {
      if (walletAddress == admin) {
        let resp = window.confirm(
          "Do you want to approve current event on Board?"
        );
        try {
          if (resp) {
            notify1();
            await contract.approveByAdmin(resp);
          } else {
            notify2();
            await contract.approveByAdmin(resp);
          }
        } catch (error) {
          toast.warn(error.message);
          return;
        }
        document.getElementById("btnAdm").style.display = "none";
      } else {
        notify3("Only Admin dep can approve from here...");
      }
    } else {
      notify3("Please approve from cabinet first...");
    }
  }
  async function itdepResp() {
    if (adminStatus == true) {
      if (walletAddress == IT) {
        let resp = window.confirm(
          "Do you want to approve current event on Board?"
        );
        try {
          if (resp) {
            notify1();
            await contract.approveByIT(resp);
          } else {
            notify2();
            await contract.approveByIT(resp);
          }
        } catch (error) {
          toast.warn(error.message);
          return;
        }
        document.getElementById("btnIT").style.display = "none";
      } else {
        notify3("Only IT dep. can approve from here...");
      }
    } else {
      notify3("Please approve from admin first...");
    }
  }

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  };
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
    transition: {
      when: "afterChildren",
    },
  };
  return (
    <>
      <motion.button
        layout
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={ApproveEventBoard}
        className={`${style.ApproveEvent}`}
      >
        <h3>Approve Event</h3>
      </motion.button>
      <motion.div variants={list} id="board" className={`${style.board} `}>
        <motion.button
          variants={item}
          id="BtnFac"
          onClick={() => facultyResp()}
          //   className={style.Faculty}
        >
          Faculty
        </motion.button>
        <motion.button
          variants={item}
          id="btnCabi"
          onClick={cabinetResp}
          //   className={style.StdCabinate}
        >
          Student Cabinet
        </motion.button>
        <motion.button
          variants={item}
          id="btnAdm"
          onClick={adminResp}
          //   className={style.Admin}
        >
          Admin Department
        </motion.button>
        <motion.button
          variants={item}
          id="btnIT"
          onClick={itdepResp}
          //   className={style.IT}
        >
          It Department
        </motion.button>
      </motion.div>

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
    </>
  );
};
export default Index;
