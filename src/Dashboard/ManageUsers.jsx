import { useQuery } from "@tanstack/react-query";

import ManageUserTable from "./ManageUserTable";
import useAxiosSecure from "../Hooks2/useAxiosSecure";

// import useuseAxiosPublic  from "../Hooks/useuseAxiosPublic ";
const ManageUsers = () => {
  const token = localStorage.getItem("access-token");
  console.log(token);
  const axiosSecure = useAxiosSecure();
  // const axiosPublic = useAxiosPublic();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/usere?role=worker");
      return res.data;
    },
  });

  console.log(users);
  // if (isLoading) {
  //   return (
  //     <div className="h-svh flex justify-center items-center w-full">
  //       <span className="loading loading-bars loading-xs"></span>
  //       <span className="loading loading-bars loading-sm"></span>
  //       <span className="loading loading-bars loading-md"></span>
  //       <span className="loading loading-bars loading-lg"></span>
  //     </div>
  //   );
  // }
  return (
    <div>
      <div className="overflow-x-auto ">
        <table className="table   ">
          <thead className="  ">
            <tr>
              <th>
                <label>index</label>
              </th>
              <th className=" ">image</th>
              {/* <th className=" pr-10">Name</th> */}
              <th className=" ">email</th>

              {/* <th>role</th> */}
              {/* <th>coin</th>  */}
              <th className="">update role</th>
              <th className="">delete user</th>
            </tr>
          </thead>
          {users.map((info, idx) => (
            <ManageUserTable
              key={info._id}
              idx={idx}
              info={info}
              fetch={refetch}
            ></ManageUserTable>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
