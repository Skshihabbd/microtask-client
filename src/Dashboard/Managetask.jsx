import { useQuery } from "@tanstack/react-query";

import ManageUserTable from "./ManageUserTable";
import Managetasktable from "./Managetasktable";
import useAxiosSecure from "../Hooks2/useAxiosSecure";

const Managetask = () => {
  const axiosSecure = useAxiosSecure();

  const { data: managetasksall = [], refetch } = useQuery({
    queryKey: ["managetasksall"],
    queryFn: async () => {
      const res = await axiosSecure.get("/managetasksall");
      return res.data;
    },
  });

  console.log(managetasksall);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>index</th>
              <th>Task title</th>
              <th>Task details</th>
              <th>Quantity</th>
              <th>Completion date</th>
            </tr>
          </thead>
          {managetasksall.map((info, idx) => (
            <Managetasktable
              fetchp={refetch}
              key={info._id}
              idx={idx}
              info={info}
            ></Managetasktable>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Managetask;
