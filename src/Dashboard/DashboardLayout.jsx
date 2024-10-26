import { NavLink, Outlet } from "react-router-dom";
import DashBoardNavbar from "./DashBoardNavbar";
import Footer from "../Section/Footer";
import PrivetRoute from "../assets/Router/PrivetRoute";
import { useQuery } from "@tanstack/react-query";
import { RxCross2 } from "react-icons/rx";
import { CgMenu } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import "animate.css";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks2/useAxiosSecure";
import { useState } from "react";

const DashboardLayout = () => {
  const [toggle, setToggle] = useState(false);
  const { users } = useAuth();
  const axiosPublic = useAxiosSecure();
  const { data: alluser = [], refetch } = useQuery({
    queryKey: ["alluser"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user?email=${users.email}`);
      return res.data;
    },
  });

  return (
    <div className="w-full relative">
      <div className="w-full relative">
        <div className="fixed bg-sky-600 w-full z-20  ">
          <DashBoardNavbar></DashBoardNavbar>

          {toggle ? (
            <>
              <button
                onClick={() => setToggle(false)}
                className="  w-10 absolute  animate__animated animate__zoomIn z-30 md:top-7 md:left-2 right-2 top-8  "
              >
                <RxCross1 className="text-3xl  text-white" />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setToggle(true)}
                className=" absolute w-10 animate__animated animate__flipInX z-30 md:top-7 md:left-2 right-2 top-8  "
              >
                <CgMenu className="text-3xl  text-white" />
              </button>
            </>
          )}
        </div>
      </div>

      <div
        className="grid grid-cols-8  top-[90px] 
      md:top-[95px] lg:top-28 absolute   w-full "
      >
        <div className={`col-span-2 relative   z-10   lg:flex  `}>
          <div
            className={` fixed   z-10 h-full  md:w-52 lg:w-72 text-center    bg-cyan-600  ${
              toggle
                ? "animate__animated animate__fadeInLeft   "
                : "opacity-0   animate__animated animate__fadeOutLeft   "
            }`}
          >
            <ul className="space-y-10 my-16 mx-6 lg:h-40  2xl:h-52   mx-auto">
              {alluser.role === "admin" && (
                <>
                  <li className="bg-emerald-300 bg- py-2    font-bold">
                    <NavLink
                      className={({ isActive }) =>
                        ` ${
                          isActive
                            ? "text-yellow-500 py-[10px] md:px-2 bg-black "
                            : "text-white hover:text-black"
                        }`
                      }
                      to={"/dashboard/adminhome"}
                    >
                      Admin Home
                    </NavLink>
                  </li>
                  <li className="bg-emerald-300 py-2  font-bold">
                    <NavLink
                      className={({ isActive }) =>
                        ` ${
                          isActive
                            ? "text-yellow-500 py-[10px] md:px-2 bg-black "
                            : "text-white hover:text-black"
                        }`
                      }
                      to={"/dashboard/manageuser"}
                    >
                      Manage Users
                    </NavLink>
                  </li>
                  <li className="bg-emerald-300 py-2  font-bold">
                    <NavLink
                      className={({ isActive }) =>
                        ` ${
                          isActive
                            ? "text-yellow-500 py-[10px] md:px-2 bg-black "
                            : "text-white hover:text-black"
                        }`
                      }
                      to={"/dashboard/managetask"}
                    >
                      Manage Task
                    </NavLink>
                  </li>
                </>
              )}
              {alluser.role === "task creator" && (
                <>
                  <li className="bg-emerald-300 py-2  font-bold">
                    <NavLink
                      className={({ isActive }) =>
                        ` ${
                          isActive
                            ? "text-yellow-500 py-[10px] md:px-2 bg-black "
                            : "text-white hover:text-black"
                        }`
                      }
                      to={"/dashboard/creatorhome"}
                    >
                      Creator Home
                    </NavLink>
                  </li>
                  <li className="bg-emerald-300 py-2  font-bold">
                    <NavLink
                      className={({ isActive }) =>
                        ` ${
                          isActive
                            ? "text-yellow-500 py-[10px] md:px-2 bg-black "
                            : "text-white hover:text-black"
                        }`
                      }
                      to={"/dashboard/addnewtask"}
                    >
                      Add new Tasks
                    </NavLink>
                  </li>
                  <li className="bg-emerald-300 py-2  font-bold">
                    <NavLink
                      className={({ isActive }) =>
                        ` ${
                          isActive
                            ? "text-yellow-500 py-[10px] md:px-2 bg-black "
                            : "text-white hover:text-black"
                        }`
                      }
                      to={"/dashboard/mytask"}
                    >
                      My Tasks
                    </NavLink>
                  </li>
                  <li className="bg-emerald-300 py-2  font-bold">
                    <NavLink
                      className={({ isActive }) =>
                        ` ${
                          isActive
                            ? "text-yellow-500 py-[10px] md:px-2 bg-black "
                            : "text-white hover:text-black"
                        }`
                      }
                      to={"/dashboard/purchasecoin"}
                    >
                      Purchase Coin
                    </NavLink>
                  </li>
                  <li className="bg-emerald-300 py-2  font-bold">
                    <NavLink
                      className={({ isActive }) =>
                        ` ${
                          isActive
                            ? "text-yellow-500 py-[10px] md:px-2 bg-black "
                            : "text-white hover:text-black"
                        }`
                      }
                      to={"/dashboard/paymenthistory"}
                    >
                      Payment history
                    </NavLink>
                  </li>
                </>
              )}

              {alluser.role === "worker" && (
                <>
                  <li className="bg-emerald-300 py-2  font-bold">
                    <NavLink
                      className={({ isActive }) =>
                        ` ${
                          isActive
                            ? "text-yellow-500 py-[10px] md:px-2 bg-black "
                            : "text-white hover:text-black"
                        }`
                      }
                      to={"/dashboard/workerhome"}
                    >
                      Worker Home
                    </NavLink>
                  </li>
                  <li className="bg-emerald-300 py-2  font-bold">
                    <NavLink
                      className={({ isActive }) =>
                        ` ${
                          isActive
                            ? "text-yellow-500 py-[10px] md:px-2 bg-black "
                            : "text-white hover:text-black"
                        }`
                      }
                      to={"/dashboard/tasklist"}
                    >
                      Task List
                    </NavLink>
                  </li>

                  <li className="bg-emerald-300 py-2  font-bold">
                    <NavLink
                      className={({ isActive }) =>
                        ` ${
                          isActive
                            ? "text-yellow-500 py-[10px] md:px-2 bg-black "
                            : "text-white hover:text-black"
                        }`
                      }
                      to={"/dashboard/mysubmission"}
                    >
                      My Submissions
                    </NavLink>
                  </li>
                  <li className="bg-emerald-300 py-2  font-bold">
                    <NavLink
                      className={({ isActive }) =>
                        ` ${
                          isActive
                            ? "text-yellow-500 py-[10px] md:px-2 bg-black "
                            : "text-white hover:text-black"
                        }`
                      }
                      to={"/dashboard/withdraw"}
                    >
                      WithDrawals
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div
          className={`col-span-8 ${toggle ? "lg:col-span-6" : "col-span-8"}`}
        >
          <Outlet></Outlet>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default DashboardLayout;
