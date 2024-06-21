import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks2/useAxiosSecure";


const WorkerRoute = ({ children }) => {
  const { users, loader } = useAuth();

//   const location = useLocation();

  const axiosPublic = useAxiosSecure();
  //   const  data= axiosPublic.get(`user?email=${users.email}`)

  const { data: user = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user?email=${users.email}`);
      return res.data;
    },
  });

  console.log(user.role);

  if (users && user.role === "worker") {
    return children;
  }
  return <Navigate to={"/login"} replace></Navigate>;
};

export default WorkerRoute;
