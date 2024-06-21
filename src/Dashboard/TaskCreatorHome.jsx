import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";

import TaskcreatorHometable from "./TaskcreatorHometable";
import Taskcreatorstatehome from "./Taskcreatorstatehome";
import useAxiosSecure from "../Hooks2/useAxiosSecure";

const TaskCreatorHome = () => {
  const { users } = useAuth();

  const axiosPublic = useAxiosSecure();

  // const {data: taskhome = [] ,refetch} = useQuery({
  //     queryKey: ['taskhome'],
  //     queryFn: async() =>{
  //         const res = await axiosPublic.get(`/taskcreatorhome?email=${users.email}`);
  //        return res.data
  //     }
  //  })

  const { data: taskhomesubmits = [], refetch } = useQuery({
    queryKey: ["taskhomesubmit"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/taskcreatorhomesubmit?email=${users.email}`
      );
      return res.data;
    },
  });
  console.log(taskhomesubmits);

  return (
    <div>
      <div>
        <Taskcreatorstatehome></Taskcreatorstatehome>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>index</th>
              <th>Task title</th>
              <th>Worker name &Email</th>
              <th>view submission</th>
              <th>Approved or reject</th>
            </tr>
          </thead>
        </table>
        {taskhomesubmits.map((info, idx) => (
          <TaskcreatorHometable
            key={info._id}
            idx={idx}
            fetche={refetch}
            info={info}
          ></TaskcreatorHometable>
        ))}
      </div>
    </div>
  );
};

export default TaskCreatorHome;
