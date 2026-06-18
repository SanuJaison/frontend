// import React from 'react'
import { MdDeleteForever } from "react-icons/md";

import { Link } from "react-router-dom";
import { deleteResumeAPI, getAllResumeAPI } from "../service/allApi";
import { useEffect, useState } from "react";

function History() {
  const [allResumes, setAllResumes] = useState([]);

  const getAllResume = async () => {
    const result = await getAllResumeAPI();
    console.log(result);
    setAllResumes(result?.data);
  };

  const handleDeleteResume = async (resumeID) => {
    const result = await deleteResumeAPI(resumeID);
    console.log(result);
    getAllResume();
  };

  useEffect(() => {
    getAllResume();
  }, []);

  return (
    <>
      <div className="contaainer">
        <div className="d-flex justify-content-around align-items-center">
          <h1>Downloaded Resume History</h1>
          <Link to={"/form"}>Back</Link>
        </div>
        <div className="row mt-5">
          {allResumes?.map((resume, index) => (
            <div key={index} className="col-lg-4 mb-3">
              <div className="shadow rounded p-3">
                <div className="d-flex justify-content-between p-3">
                  <h6>Review at : </h6>
                  <button
                    onClick={() => handleDeleteResume(resume?.id)}
                    className="btn fs-5 text-danger"
                  >
                    <MdDeleteForever />
                  </button>
                </div>
                <div>
                  <h4>Name : {resume?.fullName}</h4>
                  <h5>Name : {resume?.jobtitle}</h5>
                  <p>Phone : {resume?.contact}</p>
                  <p>Email : {resume?.email}</p>
                  <p>Linkedin Link : {resume?.linkedin}</p>
                  <p>Github Link : {resume?.github}</p>
                  <p>Location : {resume?.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-center fw-bolder my-5">
            Now Resumes are downloaded yet
          </h1>
        </div>
      </div>
    </>
  );
}

export default History;
