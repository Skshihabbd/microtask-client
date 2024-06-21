import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks2/useAxiosSecure";


const AdminRouter = ({ children }) => {
  const { users, loader } = useAuth();

  const location = useLocation();

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
  // if (loader) {
  //     return (
  //       <div className="h-svh flex bg-black items-center w-full">
  //         <div className="w-16 h-16  border-4 mx-auto  border-dashed rounded-full animate-spin dark:border-violet-600"></div>
  //       </div>

  //     );
  //   }
  if (users && user.role === "admin") {
    return children;
  }
  return <Navigate to={"/login"} replace></Navigate>;
};

export default AdminRouter;
