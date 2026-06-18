import React, { useRef } from "react";
import { MdEditDocument } from "react-icons/md";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import jobRoles from "../assets/jobRole.json";
import { editResumeAPI } from "../service/allApi";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "80vh",
  overflowY: "auto",
};

function Edit({ userData, setUserData }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const skillRef = useRef();

  const addSkill = (skill) => {
    console.log(skill);
    if (skill) {
      if (
        userData?.skills
          ?.map((item) => item.toLowerCase())
          ?.includes(skill.toLowerCase())
      ) {
        alert(`${skill} Already exist, Add another`);
      } else {
        setUserData({ ...userData, skills: [...userData.skills, skill] });
        skillRef.current.value = "";
      }
    } else {
      alert(`Enter Skill`);
    }
  };
  const removeSkills = (skill) => {
    setUserData({
      ...userData,
      skills: userData?.skills?.filter((item) => item != skill),
    });
  };

  //edit
  const handleEdit = async () => {
    // try {
    //   const result = await editResumeAPI(userData.id, userData)
    //   if(result.status >= 200 && result.status < 300){
    //     alert(`Resume updated succesfully`)
    //     handleClose()
    //   }
    //   else{
    //     alert(`Failed to Update Resume`)
    //   }
    // } catch (error) {
    //   console.log(error);

    // }

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
        const result = await editResumeAPI(userData.id, userData);
        console.log(result);
        if (result.status == 200) {
          handleClose();
          Swal.fire({
            title: "Resume Added Successfully",
            text: "Click ok to view the resume",
            icon: "success",
          });
        } else {
          alert(`Something went wrong`);
        }
      } catch (error) {
        console.log(error);
        alert(`Something went wrong`);
      }
    } else {
      alert(`Fill the form completely`);
    }
  };

  return (
    <>
      <div>
        <button onClick={handleOpen} className="btn fs-2 me-2">
          <MdEditDocument />
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit Resume Details
            </Typography>
            <Box>
              <div className="mt-3">
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
                    <InputLabel id="demo-simple-select-label">
                      Job Role
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Job Role"
                      value={userData.jobtitle}
                      onChange={(e) =>
                        setUserData({ ...userData, jobtitle: e.target.value })
                      }
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

              <div className="mt-3">
                <h3>Skills</h3>
                <div className="d-flex justify-content-center align-items-center">
                  <input
                    ref={skillRef}
                    type="text"
                    placeholder="Add Skill"
                    className="form-control"
                  />
                  <Button
                    className="btn"
                    onClick={() => addSkill(skillRef.current.value)}
                  >
                    Add
                  </Button>
                </div>

                <div className="mt-3">
                  <h5>Added Skills</h5>
                  <div>
                    {userData?.skills?.map((skill, index) => (
                      <span key={index} className="btn border">
                        {skill}{" "}
                        <span onClick={() => removeSkills(skill)}>x</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3>Summary</h3>
                <TextField
                  value={userData.summary}
                  onChange={(e) =>
                    setUserData({ ...userData, summary: e.target.value })
                  }
                  className="w-100"
                  id="outlined-basic"
                  label="Summary"
                  variant="outlined"
                />
                <div className="d-flex justify-content-end mt-4">
                  <button
                    onClick={handleEdit}
                    className="btn"
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Update
                  </button>
                </div>
              </div>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default Edit;
