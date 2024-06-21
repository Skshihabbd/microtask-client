import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";

import MysubmissionTable from "./MysubmissionTable";
import useAxiosSecure from "../Hooks2/useAxiosSecure";

const MySubmission = () => {
  const { users } = useAuth();
  const axiosPublic = useAxiosSecure();
  const { data: userworkerhomessubmit = [] } = useQuery({
    queryKey: ["userworkerhomessubmit"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/userworkerhomessubmit?email=${users.email}`
      );
      return res.data;
    },
  });

  console.log(userworkerhomessubmit);
  return (
    <div>
      <p>my MySubmission Count:{userworkerhomessubmit.length}</p>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>index</th>
              <th>Task Title</th>
              <th>PayableAmount</th>
              <th className="pr-10">Creator_Name</th>
              <th className="pr-16">Status</th>
            </tr>
          </thead>
        </table>
        {userworkerhomessubmit.map((info, idx) => (
          <MysubmissionTable
            key={info._id}
            idx={idx}
            info={info}
          ></MysubmissionTable>
        ))}
      </div>
    </div>
  );
};

export default MySubmission;
