import { NavLink, Outlet } from "react-router-dom";
import DashBoardNavbar from "./DashBoardNavbar";
import Footer from "../Section/Footer";
import PrivetRoute from "../assets/Router/PrivetRoute";
import { useQuery } from "@tanstack/react-query";

import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks2/useAxiosSecure";

const DashboardLayout = () => {
  const { users } = useAuth();
  const axiosPublic = useAxiosSecure();
  const { data: alluser = [], refetch } = useQuery({
    queryKey: ["alluser"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user?email=${users.email}`);
      return res.data;
    },
  });

  console.log(alluser);
  return (
    <div>
      <DashBoardNavbar></DashBoardNavbar>

      <div className="flex min-h-screen   w-full ">
        <div className=" md:w-1/4  bg-yellow-400">
          <ul className="space-y-4    ">
             { alluser.role==="admin"  &&  
            <>
              <li className="bg-black py-1 text-white rounded-xl hover:scale-105">
                <NavLink to={"/dashboard/adminhome"}>Admin Home</NavLink>
              </li>
              <li className="bg-black py-1 text-white rounded-xl hover:scale-105">
                <NavLink to={"/dashboard/manageuser"}>Manage Users</NavLink>
              </li>
              <li className="bg-black py-1 text-white rounded-xl hover:scale-105">
                <NavLink to={"/dashboard/managetask"}>Manage Task</NavLink>
              </li>
            </> }
{
               alluser.role==="task creator"   &&  
            <>
              <li className="bg-black py-1 text-white rounded-xl hover:scale-105">
                <NavLink to={"/dashboard/creatorhome"}>Creator Home</NavLink>
              </li>
              <li className="bg-black py-1 text-white rounded-xl hover:scale-105">
                <NavLink to={"/dashboard/addnewtask"}>Add new Tasks</NavLink>
              </li>
              <li className="bg-black py-1 text-white rounded-xl hover:scale-105">
                <NavLink to={"/dashboard/mytask"}>My Tasks</NavLink>
              </li>
              <li className="bg-black py-1 text-white rounded-xl hover:scale-105">
                <NavLink to={"/dashboard/purchasecoin"}>Purchase Coin</NavLink>
              </li>
              <li className="bg-black py-1 text-white rounded-xl hover:scale-105">
                <NavLink to={"/dashboard/paymenthistory"}>
                  Payment history
                </NavLink>
              </li>
            </> }

            {
                 alluser.role==='worker'   &&
              <>
                <li className="bg-black py-1 text-white rounded-xl hover:scale-105">
                  <NavLink to={"/dashboard/workerhome"}>Worker Home</NavLink>
                </li>
                <li className="bg-black py-1 text-white rounded-xl hover:scale-105">
                  <NavLink to={"/dashboard/tasklist"}>Task List</NavLink>
                </li>
                <li className="bg-black py-1 text-white rounded-xl hover:scale-105">
                  <NavLink to={"/dashboard/taskdetails"}>Task Details</NavLink>
                </li>
                <li className="bg-black py-1 text-white rounded-xl hover:scale-105">
                  <NavLink to={"/dashboard/mysubmission"}>
                    My Submissions
                  </NavLink>
                </li>
                <li className="bg-black py-1 text-white rounded-xl hover:scale-105">
                  <NavLink to={"/dashboard/withdraw"}>WithDrawals</NavLink>
                </li>
              </>
            }
          </ul>
        </div>
        <div className="border-2  w-3/4">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
