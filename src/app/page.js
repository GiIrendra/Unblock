"use client";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import ABI from "./components/abi";

import Sty from "./page.module.css";
import Styll from "./dashb.module.css";
import moment from "moment";

export default function Home() {
  //-----------------------using ether and connectin
  const [contract, setContract] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  // -------------------------------------------------J=Hooks
  const [name, setName] = useState("");
  const [vanue, setVanue] = useState("");
  const [mmdate, setMmdate] = useState("");
  const [date1, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setbudget] = useState("");
  // -------------------------------------------making another copy to save this data
  const [name1, setName1] = useState("");
  const [vanue1, setVanue1] = useState("");
  const [copyD, setcopyD] = useState("");
  const [description1, setDescription1] = useState("");
  const [budget1, setbudget1] = useState("");
  const stdcabinet = "0x8294effa17b1efe336d0b7a5c70b55f7309c3eaf";
  const faculty = "0xa374b55eb2ec3e9302556e6441bc6dfef80a0de5";
  const clubadd = "0x985636A11d53985D6E6B08cE85631d7977E11d85";
  const admin = "0xad2c78a6e00c6efb07d5388d740ad1ccb2f6b59d";
  const IT = "0x534f209BBcd30034841f9C93Bec2952Cd1185fF5".toLowerCase();

  // -------------------------------TAking approval of faculty----------------------------------------------------------
  const [facResp, setfacultyResp] = useState("sjoifjosij");
  const [cabiResp, setcabiResp] = useState("");
  const [admResp, setadmResp] = useState("");
  const [itResp, setitResp] = useState("");

  const connectminewallet = async () => {
    console.log("i am in ether");
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        "0xacde45190ef9e4cd18db09044b374c8134b80080",
        ABI,
        signer
      );
      setContract(contract);
    } catch (error) {
      console.log(error.message);
    }
  };
  // async function sendData(){
  //   await contract.submitProposal('ram',1233,'ssfda','saffwef','3242');
  // };
  // async function getdata(){
  //   const club = await contract.proposals('0x985636A11d53985D6E6B08cE85631d7977E11d85');
  //   console.log(club);
  // };

  // -------------------------------------------------To bring and back Approval board
  function ApproveEventBoard() {
    if (
      walletAddress == stdcabinet ||
      walletAddress == faculty ||
      walletAddress == admin ||
      walletAddress == IT
    ) {
      let board = document.getElementById("board");
      let BoardRight = board.style.right;
      if (BoardRight == "85%") {
        board.style.right = "110%";
      } else {
        board.style.right = "85%";
      }
    } else {
      alert("You are not authorised!!!" + walletAddress);
    }
  }

  // -------------------------------------------------js to move register event form
  function RegisterEvent() {
    let board = document.getElementById("RegForm");
    let BoardLeft = board.style.left;
    if (BoardLeft == "102%") {
      board.style.left = "10%";
    } else {
      board.style.left = "102%";
    }
  }

  // -------------------------------------------------Function to handle form submission
  async function SubmitForm() {
    connectminewallet();
    if (!name || !vanue || !date1 || !description || !budget) {
      alert("Please fill all section");
    } else {
      console.log(walletAddress);
      let mmdate1 = moment(date1, "YYYY-MM-DD").unix();
      setMmdate(mmdate1);

      const club = await contract.proposals(walletAddress);
      console.log(club, "....it is club address");

      await contract.submitProposal(name, mmdate1, vanue, description, budget);

      console.log("data sent to backend....!!!!");

      alert("Your form has been submitted");
      console.log(date1);
      setName1(name);
      setVanue1(vanue);
      setcopyD(date1);
      setDescription1(description);
      setbudget1(budget1);
      setDate("");
      setDescription("");
      setName("");
      setVanue("");
      setbudget("");
      RegisterEvent();
    }
  }

  // ----------------------------------------------------Active events dashboard
  useEffect(() => {
    let var1 = document.getElementById("eventdash");
    var1.style.top = "102vh";
  }, []);
  function checkEventss() {
    let var1 = document.getElementById("eventdash");
    if (var1.style.top == "102vh") {
      var1.style.top = "-1.2vh";
    } else {
      var1.style.top = "102vh";
    }
  }

  // -----------------------------------------------------metamask connect

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0] + "Metamask connected account");
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0] + "Metamask connected account");
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0] + "Metamask connected account");
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  // -------------------------------TAking approval of faculty----------------------------------------------------------

  async function facultyResp() {
    if (walletAddress == faculty) {
      let var111 = window.confirm(
        "Do you want to approve current event on Board?"
      );
      if (var111) {
        window.alert("You have successfully approved the event");
      } else {
        window.alert("You have rejected the event");
      }
      setfacultyResp("true");
      timelineFac(var111);
      document.getElementById("BtnFac").style.display = "none";
    } else {
      alert("Only faculty can approve from here...");
    }
  }

  function cabinetResp() {
    if (facResp == "true") {
      if (walletAddress == stdcabinet) {
        let var111 = window.confirm(
          "Do you want to approve current event on Board?"
        );
        if (var111) {
          window.alert("You have successfully approved the event");
        } else {
          window.alert("You have rejected the event");
        }
        setcabiResp(var111);
        timelineCabinet(var111);
        document.getElementById("btnCabi").style.display = "none";
      } else {
        alert("Only StdCabinet can approve from here...");
      }
    } else {
      alert("Please approve from faculty first...");
    }
  }
  function adminResp() {
    if (cabiResp == true) {
      if (walletAddress == admin) {
        let var111 = window.confirm(
          "Do you want to approve current event on Board?"
        );
        if (var111) {
          window.alert("You have successfully approved the event");
        } else {
          window.alert("You have rejected the event");
        }
        setadmResp(var111);
        timelineAdmin(var111);
        document.getElementById("btnAdm").style.display = "none";
      } else {
        alert("Only Admin dep can approve from here...");
      }
    } else {
      alert("Please approve from cabinet first...");
    }
  }
  function itdepResp() {
    if (admResp == true) {
      if (walletAddress == IT) {
        let var111 = window.confirm(
          "Do you want to approve current event on Board?"
        );
        if (var111) {
          window.alert("You have successfully approved the event");
        } else {
          window.alert("You have rejected the event");
        }
        setitResp(var111);
        timelineIT(var111);
        document.getElementById("btnIT").style.display = "none";
      } else {
        alert("Only IT dep. can approve from here...");
      }
    } else {
      alert("Please approve from admin first...");
    }
  }
  // -------------------------------MAking approval time line active----------------------------------------------------------
  function timelineFac(a) {
    if (a) {
      document.getElementById("TeacherBlock").style.border = "2vh solid green";
    } else {
      document.getElementById("TeacherBlock").style.border = "2vh solid red";
    }
  }
  function timelineCabinet(a) {
    if (a) {
      document.getElementById("CabinetBlock").style.border = "2vh solid green";
    } else {
      document.getElementById("CabinetBlock").style.border = "2vh solid red";
    }
  }
  function timelineAdmin(a) {
    if (a) {
      document.getElementById("AdminBlock").style.border = "2vh solid green";
    } else {
      document.getElementById("AdminBlock").style.border = "2vh solid red";
    }
  }
  function timelineIT(a) {
    if (a) {
      document.getElementById("ItBlock").style.border = "2vh solid green";
    } else {
      document.getElementById("ItBlock").style.border = "2vh solid red";
    }
  }
  // -------------------------------refresh Value Onboard----------------------------------------------------------

  const refreshValueOnboard = async () => {
    connectminewallet();
    try {
      const crap = await contract.proposals(clubadd);
      let val1 = crap.eventName;
      let val2=crap.venue;
      let val3=crap.budget;
      let val4=crap.description;
      let val5=moment.unix(crap.date).format("DD/MM/YYYY");
      console.log(crap);
      setName1(val1);
      setVanue1(val2);
      setbudget1(val3);
      setDescription1(val4);
      setcopyD(val5);
      console.log("club address...  " + crap.eventName);
      console.log("club vanue...  " + crap.venue);
      console.log("club status...  " + crap.status);
      console.log("club budget...  " + crap.budget);
      console.log("club desc...  " + crap.description);
      console.log("club date...  " + val5);
    } catch (error) {
      console.log(error.message);
    }
   
  };

  return (
    //---------------------------------------------------------- Home Page
    <main className={Sty.Homepg}>
      {/* //-------------------------------------------------------Connect with metaMask  */}
      <button onClick={connectWallet} className={Sty.Connect}>
        <span className="">
          {walletAddress && walletAddress.length > 0
            ? `Connected: ${walletAddress.substring(
                0,
                6
              )}...${walletAddress.substring(38)}`
            : "Connect Wallet  🦊"}
        </span>{" "}
      </button>
      {/* //------------------------------------------------------- Approve event and Board */}
      <button onClick={ApproveEventBoard} className={Sty.ApproveEvent}>
        Approve Event
      </button>
      <div id="board" className={Sty.board}>
        <button id="BtnFac" onClick={facultyResp} className={Sty.Faculty}>
          Faculty
        </button>
        <button id="btnCabi" onClick={cabinetResp} className={Sty.StdCabinate}>
          Student Cabinet
        </button>
        <button id="btnAdm" onClick={adminResp} className={Sty.Admin}>
          Admin Department
        </button>
        <button id="btnIT" onClick={itdepResp} className={Sty.IT}>
          It Department
        </button>
      </div>

      {/* //------------------------------------------------------- Register event and Board */}
      <div id="RegForm" className={Sty.SubmitEventDetails}>
        <h2 style={{ marginBottom: "7vh", marginTop: "6vh" }}>
          Submit your Event Details
        </h2>
        <input
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter your Event name"
        />
        <input
          id="vanue"
          onChange={(e) => setVanue(e.target.value)}
          value={vanue}
          type="text"
          placeholder="Enter your Event vanue"
        />
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date1}
          type="date"
          placeholder="Enter your Event name"
        />
        <textarea
          id="description"
          name="description"
          rows="4"
          onChange={(e) => setDescription(e.target.value)}
          cols="50"
          placeholder="Event Description"
          value={description}
        ></textarea>
        <input
          id="budget"
          onChange={(e) => setbudget(e.target.value)}
          value={budget}
          type="Number"
          placeholder="Enter your Event Budget"
        />
        <button onClick={SubmitForm}>Submit</button>
        <button onClick={RegisterEvent}>Back</button>
      </div>

      {/* //------------------------------------------------------- Home page Menue */}
      <div className={Sty.HomeMainOption}>
        <button onClick={RegisterEvent} className={Sty.RegEvent}>
          Register For Event
        </button>
        <button onClick={checkEventss} className={Sty.ActiveEvent}>
          Active Events
        </button>
      </div>

      {/* //------------------------------------------------------- Home page images to get attention */}
      <div className={Sty.HomeMainImg}></div>
      <div className={Sty.HomeMainImg2}></div>

      {/* //------------------------------------------------------- Active Events Dashboard */}
      <div id="eventdash" className={Styll.eventdashboard}>
        <button className={Styll.backdashtohome} onClick={checkEventss}>
          Back
        </button>
        <button
          style={{ border: "2px solid aqua", borderRadius: "5vh" }}
          onClick={refreshValueOnboard}
        >
          Refresh
        </button>
        <h1>Active Event Dashboard</h1>
        <div className={Styll.EventDescription}>
          <ul>
            <li>Event: {name1}</li>
            <li>Venue: {vanue1}</li>
            <li>Date: {copyD}</li>
            <li>Description: {description1}</li>
            <li>Budget: {budget1}</li>
          </ul>
        </div>
        <h3>Event Approval Progress</h3>
        <div className={Styll.progressSection}>
          <div id="TeacherBlock" className={Styll.progTeach}>
            <h3>Teacher</h3>
          </div>
          <div id="CabinetBlock" className={Styll.stdCabinet}>
            <h3>Student Cabinate</h3>
          </div>
          <div id="AdminBlock" className={Styll.progAdmin}>
            <h3>Admin Dep.</h3>
          </div>
          <div id="ItBlock" className={Styll.progIT}>
            <h3>IT Dep.</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
