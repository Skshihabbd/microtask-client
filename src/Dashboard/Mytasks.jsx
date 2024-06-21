import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";

import TaskCreatorAllTask from "./TaskCreatorAllTask";
import useAxiosSecure from "../Hooks2/useAxiosSecure";

const Mytasks = () => {
  const { users } = useAuth();
  console.log(users.email);
  const axiosPublic = useAxiosSecure();

  const { data: task = [], refetch } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/taskcreator?email=${users.email}`);
      return res.data;
    },
  });

  console.log(task);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>index</th>
            <th>Title</th>
            <th>Task Quantity</th>
            <th>PayableAmount</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
      </table>

      {task.map((info, idx) => (
        <TaskCreatorAllTask
          fetchs={refetch}
          key={info._id}
          info={info}
          idx={idx}
        ></TaskCreatorAllTask>
      ))}
    </div>
  );
};

export default Mytasks;
