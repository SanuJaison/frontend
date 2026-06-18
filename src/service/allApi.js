//apis

import commonAPI from "./commonAPI"
// import { serverURL } from "./serverURL"

//add resume
export const addResumeAPI = async (reqBody) => {
    return await commonAPI("POST", `/resumes`, reqBody)
}

//get resume
export const getParticularResume = async (resumeId) => {
    return await commonAPI("GET", `/resumes/${resumeId}`, "")
}

//get all resume
export const getAllResumeAPI = async () => {
    return await commonAPI("GET", `/resumes`, "")
}

//edit resume
export const editResumeAPI = async (resumeId, reqBody) => {
    return await commonAPI("PUT", `/resumes/${resumeId}`, reqBody)

}

//delete resume
export const deleteResumeAPI = async (resumeId) => {
    return await commonAPI("DELETE", `/resumes/${resumeId}`, "")
}