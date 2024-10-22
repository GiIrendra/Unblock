"use client";
import React, { useContext, useEffect, useState, useCallback } from "react";
import style from "./style.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import moment from "moment";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lottie from "lottie-react";
import eventcheck from "../../assets/eventcheck.json";
import { myContext } from "@/app/page";

const ActiveEvents = ({ setBackBringActiveEvents }) => {
  const { contract } = useContext(myContext);
  // ----------------------------state varibale for the event page
  const [event, setEvent] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  //----------------------------------------------------------bring smart contract form context hook

  // //----------------------------Refresh Values of the board
  const refreshValueOnboard = useCallback(async () => {
    if (typeof document != "undefined") {
      const clubadd = await contract.clubAddress();
      try {
        const crap = await contract.proposals(clubadd);
        let { name, venue, date, description, budget } = crap;
        budget = parseInt(budget);
        date = moment.unix(date).format("DD/MM/YYYY");
        setEvent(name);
        setVenue(venue);
        setDescription(description);
        setDate(date);
        setBudget(budget);
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [contract]);

  // -------------------------------MAking approval time line active----------------------------------------------------------
  useEffect(() => {
    if (typeof document != "undefined") {
      (async () => {
        try {
          let { facultyStatus, cabinetStatus, adminStatus, itStatus } =
            await contract.getApprovalStatus();
          timelineFac(facultyStatus);
          timelineCabinet(cabinetStatus);
          timelineAdmin(adminStatus);
          timelineIT(itStatus);
        } catch (error) {
          toast.error("Error fetching approval status:", error.message);
        }
      })();
      refreshValueOnboard();
    }
  }, [contract, refreshValueOnboard]); // Dependency array to re-fetch if contract changes

  const timelineFac = (facultyStatus) => {
    const element = document.getElementById("TeacherBlock");
    if (facultyStatus === 1) {
      element.style.border = "2vh solid rgba(0, 100, 0, 0.7)";
    } else if (facultyStatus === 2) {
      element.style.border = "2vh solid rgba(139, 0, 0, 0.7)";
    } else {
      element.style.border = "2vh solid gray";
    }
  };

  const timelineCabinet = (cabinetStatus) => {
    const element = document.getElementById("CabinetBlock");
    if (cabinetStatus === 1) {
      element.style.border = "2vh solid rgba(0, 100, 0, 0.7)";
    } else if (cabinetStatus === 2) {
      element.style.border = "2vh solid rgba(139, 0, 0, 0.7)";
    } else {
      element.style.border = "2vh solid gray";
    }
  };

  const timelineAdmin = (adminStatus) => {
    const element = document.getElementById("AdminBlock");
    if (adminStatus === 1) {
      element.style.border = "2vh solid rgba(0, 100, 0, 0.7)";
    } else if (adminStatus === 2) {
      element.style.border = "2vh solid rgba(139, 0, 0, 0.7)";
    } else {
      element.style.border = "2vh solid gray";
    }
  };

  const timelineIT = (itStatus) => {
    const element = document.getElementById("ItBlock");
    if (itStatus === 1) {
      element.style.border = "2vh solid rgba(0, 100, 0, 0.7)";
    } else if (itStatus === 2) {
      element.style.border = "2vh solid rgba(139, 0, 0, 0.7)";
    } else {
      element.style.border = "2vh solid gray";
    }
  };
  // ----------------------------Back button for event page here
  function checkEventss() {
    setBackBringActiveEvents(false);
  }
  // ----------------------------Scroolbar status for the page
  // const { scrollYProgress } = useScroll();
  // const background = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   ["rgba(15, 214, 240, 0.944) ", "rgba(21, 251, 4, 0.939)"]
  // );

  return (
    <>
      <div id="eventdash" className={style.eventdashboard}>
        {/* <motion.div
          className={style.progressBar}
          style={{ scaleX: scrollYProgress, background, borderRadius: "30px" }}
        /> */}
        <motion.div className={style.eventcheckani} layout>
          <Lottie
            style={{ width: "100%", height: "40vh" }}
            speed="0.3"
            animationData={eventcheck}
            loop={true}
            autoplay={true}
          />
        </motion.div>
        <motion.button
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{ scale: 0.9 }}
          className={style.backdashtohome}
          onClick={checkEventss}
        >
          Back
        </motion.button>

        <h1 style={{ textShadow: "3px 3px 2px rgba(128, 0, 0, 1)" }}>
          Active Event Dashboard
        </h1>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className={style.EventDescription}
        >
          <ul>
            <li>Event: {event}</li>
            <li>Venue: {venue}</li>
            <li>Date: {date}</li>
            <li>Description: {description}</li>
            <li>Budget: {budget}</li>
          </ul>
        </motion.div>
        <motion.button
          whileHover={{
            scale: 1.2,
          }}
          style={{
            marginBottom: "5em",
            border: "2px solid aqua",
            borderRadius: "5vh",
          }}
          onClick={refreshValueOnboard} //------work to do
        >
          Refresh
        </motion.button>

        <h1 style={{ textShadow: "3px 3px 2px rgba(128, 0, 0, 1)" }}>
          Event Approval Progress
        </h1>
        <motion.div
          initial={{ opacity: 0.3, width: "45%", height: "20vh" }}
          whileInView={{ opacity: 1, width: "70%", height: " 30vh" }}
          transetion={{ duration: "5", delay: 1 }}
          whileHover={{ scale: 1.1 }}
          viewport={{ margin: "-200px" }}
          className={style.progressSection}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            id="TeacherBlock"
            className={style.progTeach}
          >
            <h3>Teacher</h3>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            id="CabinetBlock"
            className={style.stdCabinet}
          >
            <h3>Student Cabinate</h3>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            id="AdminBlock"
            className={style.progAdmin}
          >
            <h3>Admin Dep.</h3>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            id="ItBlock"
            className={style.progIT}
          >
            <h3>IT Dep.</h3>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ActiveEvents;
