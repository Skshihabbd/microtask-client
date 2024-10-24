import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://server-side-nu-sooty.vercel.app",
});
const useAxiosPublic = () => {
  // https://server-side-nu-sooty.vercel.app
  return axiosPublic;
};

export default useAxiosPublic;
