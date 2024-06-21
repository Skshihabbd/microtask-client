import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";

import WorkerApprovedSubmissionTable from "./WorkerApprovedSubmissionTable";
import useAxiosSecure from "../Hooks2/useAxiosSecure";

const WorkerHomeState = () => {
  const axiosPublic = useAxiosSecure();
  const { users } = useAuth();
  console.log(users);
  const { data: userworkerhomes = [], refetch } = useQuery({
    queryKey: ["userworkerhomes"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/userworkerhomes?email=${users.email}`
      );
      return res.data;
    },
  });
  console.log(userworkerhomes);

  const { data: userworkerhomessubmit = [] } = useQuery({
    queryKey: ["userworkerhomessubmit"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/userworkerhomessubmit?email=${users.email}`
      );
      return res.data;
    },
  });
  const { data: userworkerhomessubmitpay = [] } = useQuery({
    queryKey: ["userworkerhomessubmitpay"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/userworkerhomessubmitpay?email=${users.email}`
      );
      return res.data;
    },
  });

  console.log(userworkerhomessubmitpay);

  const sum = userworkerhomessubmitpay.reduce((accumulator, item) => {
    return accumulator + item.payableAmount;
  }, userworkerhomes.coin);
  const sum2 = userworkerhomessubmitpay.reduce((accumulator, item) => {
    return accumulator + item.payableAmount;
  }, 0);
  return (
    <div>
      <div className="flex flex-row justify-around">
        <p>availablecoin: {userworkerhomes.coin}</p>
        <p>total submission: {userworkerhomessubmit.length}</p>
        <p>All Payable amount : {sum2}</p>
      </div>
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
        {userworkerhomessubmitpay.map((info, idx) => (
          <WorkerApprovedSubmissionTable
            key={info._id}
            idx={idx}
            info={info}
          ></WorkerApprovedSubmissionTable>
        ))}
      </div>
    </div>
  );
};

export default WorkerHomeState;
