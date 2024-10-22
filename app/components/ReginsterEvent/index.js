"use client";
import React, { useState, useContext } from "react";
import style from "./style.module.css";
import { motion } from "framer-motion";
import { myContext } from "@/app/page";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
const Index = ({ setBackBringReg }) => {
  // ----------------------------state varibale for the event page
  const [event, setEvent] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");

  //--------------------------------------------------------bring smart contract,walladd form useContext hook
  const { contract, walletAddress } = useContext(myContext);

  // -------------------------------------------------Function to handle form submission
  const notifyForm = () => toast.success("Your form has been submitted");
  async function SubmitForm() {
    if (!event || !venue || !date || !description || !budget) {
      (() => toast("Please fill all section!"))();
    } else {
      let mmdate1 = moment(date, "YYYY-MM-DD").unix();
      setDate(mmdate1);

      await contract.proposeEvent(event, venue, mmdate1, description, budget);

      notifyForm();
    }

  }
  // -------------------------------------------------js to move register event form
  function RegisterEvent() {
    setBackBringReg(false);
  }
  return (
    <div className={style.main}>
      <div id="RegForm" className={style.SubmitEventDetails}>
        <h2 style={{ marginBottom: "7vh", marginTop: "6vh" }}>
          Submit your Event Details
        </h2>
        <div className={style.parent}>
          <div className={style.EventDetails}>
            <motion.input
              whileFocus={{ scale: 1.2 }}
              id="name"
              onChange={(e) => setEvent(e.target.value)}
              value={event}
              type="text"
              size={60}
              placeholder="Enter your Event name"
            />
            <motion.input
              whileFocus={{ scale: 1.2 }}
              id="vanue"
              size={40}
              onChange={(e) => setVenue(e.target.value)}
              value={venue}
              type="text"
              placeholder="Enter your Event venue"
            />
            <motion.input
              whileFocus={{ scale: 1.2 }}
              id="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              type="date"
              placeholder="Enter your Event name"
            />
            <motion.textarea
              whileFocus={{ scale: 1.2 }}
              id="description"
              name="description"
              rows="4"
              onChange={(e) => setDescription(e.target.value)}
              cols="50"
              placeholder="Event Description"
              value={description}
            ></motion.textarea>
            <motion.input
              whileFocus={{ scale: 1.2 }}
              id="budget"
              onChange={(e) => setBudget(e.target.value)}
              value={budget}
              type="Number"
              placeholder="Enter your Event Budget"
            />
            <button onClick={SubmitForm}>
              Submit
            </button>
            <button onClick={RegisterEvent}>
              Back
            </button>
          </div>
          <div className={style.EventImg}></div>
        </div>

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
    </div>
  );
};

export default Index;
