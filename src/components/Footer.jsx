// import React from 'react'
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="container-fluid text-light p-5" style={{minHeight: "350px", backgroundColor: "black"}}>
        <div className="row">
          <div className="col-4">
            <h4>AI Resume Builder</h4>
            <p>An AI Powered Resume Builder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>
          </div>
          <div className="col-4"></div>
          <div className="col-4">
            <h4>Contact Us</h4>
            <p><MdOutlineAttachEmail /> resumebuilder@gmail.com</p>
            <p><FaPhoneAlt /> 9087654321</p>
            <h5>Connect With Us</h5>
            <div className="my-3 fs-5 d-flex gap-2">
              <FaInstagram />
              <FaFacebook />
              <FaWhatsapp />
              

            </div>
          </div>
        </div>
        <h5 className="text-center">Designed & built with ❤️ using React</h5>
      </div>
    </>
  )
}

export default Footer
