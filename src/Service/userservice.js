import axios from "axios";
const baseURL = "http://localhost:3000";


export function userLogged(){

    
    // const response = axios.get(`${baseURL}/user/userAluna/`, {
    //     headers: {
    //       jwt_token: `${localStorage.getItem("token")}`,
    //     }
    //   });
    console.log("userAluna", userAluna);
      // return userAluna;
}

export function userLoggedProf(){
    const response = axios.get(`${baseURL}/user/userProfessora/`, {
        headers: {
          jwt_token: `${localStorage.getItem("token")}`,
        }
      });
      return response;
    
}