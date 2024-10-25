import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { IoIosNotifications } from "react-icons/io";

import useAuth from "../Hooks/useAuth";

import DashboardNavbarmenu from "./DashboardNavbarmenu";
import useAxiosSecure from "../Hooks2/useAxiosSecure";
const DashBoardNavbar = () => {
  const { users } = useAuth();
  // console.log(users.email)
  const axiosPublic = useAxiosSecure();
  //   const  data= axiosPublic.get(`user?email=${users.email}`)

  const { data: user = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user?email=${users.email}`);
      return res.data;
    },
  });
  return (
    <div className="w-11/12 mx-auto flex py-4 md:py-3 lg:py-5  justify-around relative items-center">
      <div className="    ">
        <Link to={"/"}>
          <h1 className="text-bold lg:text-2xl ">Pico Worker</h1>
        </Link>
      </div>
      <div className="">
        {
          <DashboardNavbarmenu
            key={user._id}
            info={user}
            fetch={refetch}
          ></DashboardNavbarmenu>
        }
      </div>
      <div className=" hidden md:flex   ">
        <h1 className="md:text-5xl items-center flex relative justify-center   text-slate-600 ">
          <IoIosNotifications />
          <span className="absolute  text-2xl font-medium text-yellow-500  ">
            {}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default DashBoardNavbar;
