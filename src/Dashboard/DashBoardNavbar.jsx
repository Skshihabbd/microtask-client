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
    <div className="w-full flex flex-row relative ">
      <div className="w-1/6 border-2 flex justify-center">
        <Link to={"/"}>
          {" "}
          <h1 className="text-bold lg:text-2xl">Pico Worker</h1>
        </Link>
      </div>
      <div className="w-4/6">
        {
          <DashboardNavbarmenu
            key={user._id}
            info={user}
            fetch={refetch}
          ></DashboardNavbarmenu>
        }

        {/* <h1>{user[0].coin}</h1> <h1><img className="w-6 h-6 rounded-full" src={user[0].image} alt="" /></h1> 
<h1>{user[0].role}</h1> <h1>{user[0].name}</h1> */}
      </div>
      <div className="w-1/6  border-2 bg-black">
        <h1 className="text-5xl items-center flex relative justify-center text-blue-700 ">
          {" "}
          <IoIosNotifications />
          <span className="absolute  text-2xl font-medium text-yellow-500  ">
            10
          </span>
        </h1>
      </div>
    </div>
  );
};

export default DashBoardNavbar;
