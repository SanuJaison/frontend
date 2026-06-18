// import React from 'react'
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

function Preview({ userData }) {
  return (
    <>
      <div>
        <h2>{userData.fullName}</h2>
        <h3>{userData.jobtitle}</h3>
        <p>Phone : {userData.contact}</p>
        <p>Email : {userData.email}</p>
        <p>Linkedin Link : {userData.linkedin}</p>
        <p>Github Link : {userData.github}</p>
        <p>Location : {userData.location}</p>
        <Divider textAlign="left" className="fw-bold fs-3">
          Professional Summary
        </Divider>
        <p>{userData.summary}</p>
        <Divider textAlign="left" className="fw-bold fs-3">
          Technical Skills
        </Divider>
        {userData?.skills?.map((skill, index) => (
          <Button key={index} variant="text">
            {skill}
          </Button>
        ))}

        <Divider textAlign="left" className="fw-bold fs-3">
          Education
        </Divider>
        <p>Bachelor's Degree : {userData.degree}</p>
        <p>University/College Name : {userData.university}</p>
        <p>Year of passing : {userData.passout}</p>
      </div>
    </>
  );
}

export default Preview;
