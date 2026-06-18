import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import jobRoles from "../assets/jobRole.json";
import jobSkills from "../assets/jobSkills.json";
import summary from "../assets/summaries.json";
import Swal from "sweetalert2";
import { addResumeAPI } from "../service/allApi";
import { useNavigate } from "react-router-dom";

const steps = [
  "Basic Information",
  "Contact Details",
  "Educational Details",
  "Review & Submit",
];

function UserInput({ userData, setUserData }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const navigate = useNavigate();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setUserData({
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
  };

  const generateAiData = () => {
    setUserData({
      ...userData,
      skills: jobSkills[userData.jobtitle],
      summary: summary[userData.jobtitle],
    });
    handleNext();
  };

  const handleAddResume = async () => {
    const {
      fullName,
      location,
      jobtitle,
      email,
      contact,
      linkedin,
      github,
      degree,
      university,
      passout,
      skills,
      summary,
    } = userData;
    if (
      fullName &&
      location &&
      jobtitle &&
      email &&
      contact &&
      contact &&
      linkedin &&
      github &&
      degree &&
      university &&
      passout &&
      skills.length != 0 &&
      summary
    ) {
      try {
        const result = await addResumeAPI(userData);
        console.log(result);

        // alert("Ready for Api call");
        if (result.status == 201) {
          Swal.fire({
            title: "Resume Added Successfully",
            text: "Click ok to view the resume",
            icon: "success",
          });
          const resumeId = result.data.id;
          navigate(`/view/resume/${resumeId}`);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...Something went wrong!",
            text: "Fill the form completely",
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      // alert("Fill the form");
      Swal.fire({
        icon: "error",
        title: "Oops...Something went wrong!",
        text: "Fill the form completely",
      });
    }
  };

  const renderStepContent = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <div>
            <h3>Personal Details</h3>
            <div className="p-3 row gap-2">
              <TextField
                value={userData.fullName}
                onChange={(e) =>
                  setUserData({ ...userData, fullName: e.target.value })
                }
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
              />
              <TextField
                value={userData.location}
                onChange={(e) =>
                  setUserData({ ...userData, location: e.target.value })
                }
                id="outlined-basic"
                label="Location"
                variant="outlined"
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Job Role</InputLabel>
                <Select
                  value={userData.jobtitle}
                  onChange={(e) =>
                    setUserData({ ...userData, jobtitle: e.target.value })
                  }
                  label="Job Role"
                >
                  {jobRoles.jobRoles.map((role, index) => (
                    <MenuItem key={index} value={role}>
                      {role}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <h3>Contact Details</h3>
            <div className="p-3 row gap-2">
              <TextField
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <TextField
                value={userData.contact}
                onChange={(e) =>
                  setUserData({ ...userData, contact: e.target.value })
                }
                id="outlined-basic"
                label="Contact Number"
                variant="outlined"
              />
              <TextField
                value={userData.linkedin}
                onChange={(e) =>
                  setUserData({ ...userData, linkedin: e.target.value })
                }
                id="outlined-basic"
                label="Linkedin Link"
                variant="outlined"
              />
              <TextField
                value={userData.github}
                onChange={(e) =>
                  setUserData({ ...userData, github: e.target.value })
                }
                id="outlined-basic"
                label="Github Link"
                variant="outlined"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Educational Details</h3>
            <div className="p-3 row gap-2">
              <TextField
                value={userData.degree}
                onChange={(e) =>
                  setUserData({ ...userData, degree: e.target.value })
                }
                id="outlined-basic"
                label="Bachelor's Degree"
                variant="outlined"
              />
              <TextField
                value={userData.university}
                onChange={(e) =>
                  setUserData({ ...userData, university: e.target.value })
                }
                id="outlined-basic"
                label="University/College Name"
                variant="outlined"
              />
              <TextField
                value={userData.passout}
                onChange={(e) =>
                  setUserData({ ...userData, passout: e.target.value })
                }
                id="outlined-basic"
                label="Year of Graduation"
                variant="outlined"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3>Review & Submit</h3>
            <p>
              Our AI will generate Skills & Summary according to your job role.
              Click the <b>Generate AI Skill & Summary</b> button to Proceed.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Button onClick={handleReset}>Reset</Button>
              <Button onClick={handleAddResume}>Finish</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box>{renderStepContent(activeStep)}</Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {/* {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button> */}
              {activeStep == steps.length - 1 ? (
                <Button onClick={generateAiData} color="inherit" sx={{ mr: 1 }}>
                  Generat Ai Skills and Summary
                </Button>
              ) : (
                <Button onClick={handleNext}>Next</Button>
              )}
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  );
}

export default UserInput;
