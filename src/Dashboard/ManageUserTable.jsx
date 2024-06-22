import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks2/useAxiosSecure";


const ManageUserTable = ({ info, fetch, idx }) => {
  console.log(info);
  const { name, email, image, coin, role, _id } = info;
  console.log(_id);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (e) => {
    console.log(e);
    axiosSecure.delete(`/managedeleteuser/${_id}`).then((res) => {
      if (res.data) {
        fetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const updateRole = (e) => {
    console.log(e, _id);
    let coins = null;
    if (e === "admin") {
      coins = null;
    } else if (e === "task creator") {
      coins = 50;
    } else if (e === "worker") {
      coins = 10;
    }

    console.log(coins);
    const updateInfo = {
      name: name,
      email: email,
      image: image,
      coin: coins,
      role: e,
    };
    console.log(updateInfo);
    axiosSecure.put(`/userup/${_id}`, updateInfo).then((res) => {
      if (res.data) {
       
        fetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table ">
        {/* head */}

        <tbody>
          <tr>
            <th>
              <label>{idx + 1}</label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{name}</div>
                  <div className="text-sm opacity-50">role:{role}</div>
                </div>
              </div>
            </td>
            <td>
              {email}
              <br />
              <span className="badge badge-ghost badge-sm">
                coin:<span className="text-red-700">{coin}</span>
              </span>
            </td>
            <td className="z-20">
              <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <button onClick={() => updateRole("admin")}>Admin</button>
                  <button onClick={() => updateRole("task creator")}>
                    Task Creator
                  </button>
                  <button onClick={() => updateRole("worker")}>Worker</button>
                </ul>
              </details>
            </td>
            <th>
              <button
                onClick={() => {
                  handleDelete(_id);
                }}
                className="btn btn-ghost btn-xs"
              >
                Delete
              </button>
            </th>
          </tr>
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default ManageUserTable;
