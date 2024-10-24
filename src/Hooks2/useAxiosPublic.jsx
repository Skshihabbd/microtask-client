import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosPublic = () => {
  // https://server-side-nu-sooty.vercel.app
  return axiosPublic;
};

export default useAxiosPublic;
