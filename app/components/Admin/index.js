"use client";
import { useState, useEffect, useContext } from "react";
import style from "./style.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { myContext } from "@/app/page";

const AdminPage = ({ setAdminFlag }) => {
  const { contract } = useContext(myContext);
  const [addresses, setAddresses] = useState({});

  const [clubRest, setClubReset] = useState(""); // address of club whom approval going to reset
  const [nameReset, setNameReset] = useState("");//name of particular whose approval going to reset

  const [updClubAdd, setUpdClubAdd] = useState("");
  const [updStdCabin, setUpdStdCabinAdd] = useState("");
  const [updFacAdd, setUpdFacAdd] = useState("");
  const [updAdminAdd, setUpdAdminAdd] = useState("");
  const [updItDepAdd, setUpdItDepAdd] = useState("");

  useEffect(() => {
    try {
      (async () => {
        const stdCabinet = await contract.studentCabinet();
        const faculty = await contract.faculty();
        const admin = await contract.admin();
        const itDepartment = await contract.itDepartment();
        const clubAddress = await contract.clubAddress();
        setAddresses({ clubAddress, stdCabinet, faculty, admin, itDepartment });
      })();
    } catch (error) {
      toast.error(error.message);
    }
  }, [contract]);

  // ---------------------------------------------------going to handle form submit button action
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      updAdminAdd.length != 42 ||
      updClubAdd.length != 42 ||
      updFacAdd.length != 42 ||
      updItDepAdd.length != 42 ||
      updStdCabin.length != 42
    ) {
      toast.warn("Every address must have 42 char length only");
      return;
    }
    try {
      const result = await contract.updateAddresses(
        updClubAdd,
        updStdCabin,
        updFacAdd,
        updAdminAdd,
        updItDepAdd
      );
      if (result) {
        toast.success("Addresses updated successfully");
        setUpdClubAdd("");
        setUpdStdCabinAdd("");
        setUpdFacAdd("");
        setUpdAdminAdd("");
        setUpdItDepAdd("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const goBackToHome = () => {
    setAdminFlag(false);
  };
  // --------------------------------------------reset approval
  const resetAppoval = async() => {
    try {
      await  contract.resetApproval(clubRest,nameReset);
      toast.success("Approval reset successfully");
      setClubReset("");setNameReset("");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className={style.main}>
      <div className={style.AdminPage}>
        <h1>Admin System</h1>
        <div className={style.AdminDataBoard}>
          <div className={style.AdminDataPage}>
            <h2>Current Chain</h2>
            <div className={style.child1}>
              <ul>
                <li>
                  <b>clubAddress </b>
                  <br />
                  {addresses.clubAddress ? addresses.clubAddress : "..."}
                </li>
                <li>
                  <b>faculty</b> <br />
                  {addresses.faculty ? addresses.faculty : "..."}
                </li>
                <li>
                  <b>cabinet</b>
                  <br />
                  {addresses.stdCabinet ? addresses.stdCabinet : "..."}
                </li>
                <li>
                  <b>admin</b> <br />
                  {addresses.admin ? addresses.admin : "..."}
                </li>
                <li>
                  <b>it</b>
                  <br />
                  {addresses.itDepartment ? addresses.itDepartment : "..."}
                </li>
              </ul>
            </div>
          </div>
          <div className={style.AdminDataUpdate}>
            <h2>Update All Chain</h2>
            <div className={style.child2}>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="clubAddress"
                  id="clubAddress"
                  value={updClubAdd}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 42) setUpdClubAdd(value);
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length != 42) {
                      setUpdClubAdd("");
                      toast.warn(
                        `${e.target.value.length} Club Address must be exactly 42 characters long!`
                      );
                    }
                  }}
                  size={42}
                  placeholder="Enter New Club Address"
                />

                <input
                  type="text"
                  name="faculty"
                  id="faculty"
                  value={updFacAdd}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 42) setUpdFacAdd(value);
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 42) {
                      setUpdFacAdd("");
                      toast.warn("Faculty must be exactly 42 characters long!");
                    }
                  }}
                  size={42}
                  placeholder="Enter Faculty"
                />

                <input
                  type="text"
                  name="stdCabinet"
                  id="stdCabinet"
                  value={updStdCabin}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 42) setUpdStdCabinAdd(value);
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 42) {
                      setUpdStdCabinAdd("");
                      toast.warn(
                        "Student Cabinet must be exactly 42 characters long!"
                      );
                    }
                  }}
                  size={42}
                  placeholder="Enter Student Cabinet"
                />

                <input
                  type="text"
                  name="admin"
                  id="admin"
                  value={updAdminAdd}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 42) setUpdAdminAdd(value);
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 42) {
                      setUpdAdminAdd("");
                      toast.warn("Admin must be exactly 42 characters long!");
                    }
                  }}
                  size={42}
                  placeholder="Enter Admin"
                />

                <input
                  type="text"
                  name="IT"
                  id="IT"
                  value={updItDepAdd}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 42) setUpdItDepAdd(value);
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 42) {
                      setUpdItDepAdd("");
                      toast.warn("IT must be exactly 42 characters long!");
                    }
                  }}
                  size={42}
                  placeholder="Enter IT"
                />

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className={style.mainResetAppovalBoardParent}>
          <div className={style.resetAppovalBoardParent}>
            <div className={style.resetAppovalBoard}>
              <input
                type="text"
                value={clubRest}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 42) setClubReset(value);
                }}
                onBlur={(e) => {
                  if (e.target.value.length != 42) {
                    setUpdClubAdd("");
                    toast.warn(
                      `${e.target.value.length} Club Address must be exactly 42 characters long!`
                    );
                  }
                }}
                size={42}
                placeholder="Enter The Club Address..."
              />

              <input
                type="text"
                value={nameReset}
                onChange={(e) => {
                  setNameReset(e.target.value)
                }}
                size={10}
                placeholder="Enter The department name..."
                department
              />
            </div>
            <button style={{ margin: "1vh" }} onClick={resetAppoval}>
              Reset Approval
            </button>
          </div>

          <button className={style.goBack} onClick={goBackToHome}>Close System</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminPage;
