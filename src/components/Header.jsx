// import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { MdHistory } from "react-icons/md";

function Header() {
  const title =
    "An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF.";
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "black" }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: 600 }}
            >
              <Link to={"/"} style={{textDecoration:"none", color:"white"}}>ResumeBuilder.ai</Link>
            </Typography>
            <div className="d-flex gap-5">
              <Link to={"/history"} className="text-white text-decoration-none">History <MdHistory className="ms-2"/></Link>
              <Tooltip title={title} sx={{ fontWeight: 600 }}>
                About Us
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
