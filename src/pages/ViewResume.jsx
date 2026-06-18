// import React from 'react'
import { FaFileDownload } from "react-icons/fa";

import { FaBackward } from "react-icons/fa";

import { Link, useParams } from "react-router-dom";
import Preview from "../components/Preview";
import Edit from "../components/Edit";
import { useEffect, useState } from "react";
import { getParticularResume } from "../service/allApi";
import jsPDF from "jsPDF";
import html2canvas from "html2canvas";

function ViewResume() {
  const [userData, setUserData] = useState({});
  const { id } = useParams();
  console.log(id);

  const getAResume = async () => {
    try {
      const result = await getParticularResume(id);
      console.log(result);
      console.log(result.data);
      setUserData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAResume();
  }, [id]);

  const downloadPDF = async () => {
    const input = document.getElementById("result");
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "png", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="d-flex justify-content-center align-items-center gap-5">
              <button className="btn fs-3 me-2" onClick={downloadPDF}>
                <FaFileDownload />
              </button>
              <Edit userData={userData} setUserData={setUserData} />
              <Link to={"/form"} className="btn fs-2 me-2">
                <FaBackward />
              </Link>
            </div>
            <div className="mt-5" id={"result"}>
              <Preview userData={userData} />
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </>
  );
}

export default ViewResume;
