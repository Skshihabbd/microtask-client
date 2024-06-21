import { useQuery } from "@tanstack/react-query";

import ManageUserTable from "./ManageUserTable";
import useAxiosSecure from "../Hooks2/useAxiosSecure";
// import useuseAxiosPublic  from "../Hooks/useuseAxiosPublic ";
const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/usere?role=worker");
      return res.data;
    },
  });

  console.log(users);
  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>index</label>
              </th>
              <th className=" pr-10">image</th>
              <th className=" pr-10">Name</th>
              <th className=" pr-16">email</th>

              {/* <th>role</th> */}
              {/* <th>coin</th>  */}
              <th className="pl-10">update role</th>
              <th className="pr-16">delete user</th>
            </tr>
          </thead>
        </table>
        {users.map((info, idx) => (
          <ManageUserTable
            key={info._id}
            idx={idx}
            info={info}
            fetch={refetch}
          ></ManageUserTable>
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
