// import React from 'react'
import UserInput from "../components/UserInput";
import Preview from "../components/Preview";
import { useState } from "react";

function Form() {
  const [userData, setUserData] = useState({
    fullName: "",
    location: "",
    jobtitle: "",
    email: "",
    contact: "",
    linkedin: "",
    github: "",
    degree: "",
    university: "",
    passout: "",
    skills: [],
    summary: "",
  });
  console.log(userData);
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-6">
            <UserInput userData={userData} setUserData={setUserData} />
          </div>
          <div className="col-6">
           {userData.fullName && <Preview userData={userData} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
