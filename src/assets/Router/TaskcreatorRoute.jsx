import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks2/useAxiosPublic";


const TaskcreatorRoute = ({ children }) => {
  const { users, loader } = useAuth();

  const location = useLocation();

  const axiosPublic =useAxiosPublic()
  //   const  data= axiosPublic.get(`user?email=${users.email}`)

  const { data: user = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user?email=${users.email}`);
      return res.data;
    },
  });

  console.log(user.role);

  if (users && user.role === "task creator") {
    return children;
  }
  return <Navigate to={"/login"} replace></Navigate>;
};

export default TaskcreatorRoute;
