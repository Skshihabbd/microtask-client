import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";



import AddNewTaskForm from "./AddNewTaskForm";
import useAxiosSecure from "../Hooks2/useAxiosSecure";

const AddNewtask = () => {
  const { users } = useAuth();
  console.log(users.email);
  const axiosPublic = useAxiosSecure();

  const { data: user = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user?email=${users.email}`);
      return res.data;
    },
  });

  console.log(user);
  return (
    <div>
      <h1>{<AddNewTaskForm info={user} fetch={refetch}></AddNewTaskForm>}</h1>
    </div>
  );
};

export default AddNewtask;
