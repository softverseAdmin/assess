import axios from "axios";

// handle user apis
const handleApis = axios.create({
  withCredentials: true, //to store cookie on browser
  baseURL: "http://localhost:3001",
});

export const getUser = async () => {
  const res = await handleApis.get("/user-info");
  const data = await res.data;
  return data;
};

export const signIn = async (input) => {
  try {
    const res = await handleApis.post(`/auth/signin`, input);
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

export const register = async (input) => {
  try {
    const res = await handleApis.post(`/register`, input);
    const data = await res.data;
    return data;
  } catch (error) {
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 400
    ) {
      console.log(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  }
};

export const logout = async () => {
  const res = await handleApis.get("/logout");
  const data = await res.data;
  return data;
};
