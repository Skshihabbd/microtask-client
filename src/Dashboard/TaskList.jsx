import { useQuery } from "@tanstack/react-query";
import TaskListCard from "./TaskListCard";
import useAxiosSecure from "../Hooks2/useAxiosSecure";

const TaskList = () => {
  // const axiosSecure=useAxiosPublic ()
  const axiosSecure = useAxiosSecure();

  const { data: alltasks = [] } = useQuery({
    queryKey: ["alltasks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/taskcreatorall");
      return res.data;
    },
  });
  console.log(alltasks);
  // console.log(typeof (alltasks[0].quantity))
  return (
    <div>
      <h1>{alltasks.length}</h1>
      <div className="grid lg:grid-cols-2 gap-6">
        {alltasks.map((info) => (
          <TaskListCard key={info._id} info={info}></TaskListCard>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
