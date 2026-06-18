import axios from "axios";
import { serverURL } from "./serverURL";

const axiosInstance = axios.create(
    {
        baseURL: serverURL,
        timeout: 5000
    }
)

//response interceptors
axiosInstance.interceptors.response.use(
    (response) =>{
        console.log("Response Recieved");
        return response
        
    },(error) =>{
        if(error.response){
            const status = error.response.status
            if(status == 401){
                console.log("Unauthorized acces, redirect to login");
                
            }
            else if(status == 404){
                console.log("Page not found");
                
            }
            else if(status == 500){
                console.log("Server error");
                
            }
            else if(error.request){
                console.log("No response from server...");
                
            }
            else{
                console.log("Error: ", error.message);
                
            }
            return Promise.reject(error)
        }
    }
)

export default axiosInstance;