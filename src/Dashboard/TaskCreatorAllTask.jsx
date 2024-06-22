import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../Hooks2/useAxiosSecure";

const TaskCreatorAllTask = ({ info, idx, fetchs }) => {
  const [ids, setid] = useState(null);
  const axiosPublic = useAxiosSecure();

  // const

  // console.log(ids)
  // const {payableAmount
  // }=ids

  const { users } = useAuth();
  console.log(users?.email);

  const {
    data: user = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user?email=${users?.email}`);
      return res.data;
    },
  });

  const { coin, email, name, role, _id, image } = user;
  console.log(coin, image);
  console.log(user);

  const handleUserUpdate = async (id) => {
    await fetch(`https://server-side-nu-sooty.vercel.app/taskcreators/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          handleDelete(id, data);
        }
      });
  };

  const handleDelete = (ide, data) => {
    console.log(ide);
    console.log(data);
    const payamounts = coin + data?.payableAmount;
    console.log(typeof payamounts);
    if (typeof payamounts !== "number") {
      Swal.fire({
        title: "Are you sure?",
        text: "please press the delete button again",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "confirm",
      });
    } else {
      const userUpdate = {
        name: name,
        email: email,
        role: role,
        coin: payamounts,
        image: image,
      };

      axiosPublic.put(`/user/${_id}`, userUpdate).then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          axiosPublic.delete(`/taskcreator/${ide}`).then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "your file has been deleted",
                showConfirmButton: false,
                timer: 1500,
              });
              fetchs();
            }
          });
        }
      });
    }
  };

  return (
    <div>
      <tbody className="table">
        {/* row 1 */}
        <tr className="bg-base-200 text-center">
          <th>{idx + 1}</th>
          <td>{info.title}</td>
          <td className="text-center">{info.quantity}</td>
          <td>{info.payableAmount}</td>
          <td>
            <Link to={`/dashboard/taskupdate/${info._id}`}>
              <button>update</button>
            </Link>
          </td>
          <td>
            <button onClick={() => handleUserUpdate(info._id)}>delete</button>
          </td>
        </tr>
      </tbody>
    </div>
  );
};

export default TaskCreatorAllTask;
