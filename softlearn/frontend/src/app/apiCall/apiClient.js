import axios from "axios";

// handle user apis
const handleApis = axios.create({
  withCredentials: true, //to store cookie on browser
  baseURL: "http://localhost:3001/api/users",
});

export const getAuthStatus = async() => {
    const  response = await axios.get(`${handleApis}/auth/status`);
    const data  = await response.data;
    return data;
}