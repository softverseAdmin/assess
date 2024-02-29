import axios from "axios";

// handle user apis
const handleApis = axios.create({
  withCredentials: true, //to store cookie on browser
  baseURL: "http://localhost:3000",
});

export const getAuthStatus = async() => {
    const  response = await axios.get(`${handleApis}/auth/status`);
    const data  = await response.data;
    return data;
}

export const signIn = async (input) => {
  try {
    const res = await handleApis.post(`/signin`, input);
    const data = await res.data;
    return data;
  } catch (error) {
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 400
    ) {
      //console.log(error.response.data.message);
      throw error.response.data.message;
    }
  }
};
