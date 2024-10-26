import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks2/useAxiosSecure";

const Managetasktable = ({ info, idx, fetchp }) => {
  // const [data,setData]=useState('')
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    axiosSecure.delete(`/managetasksall/${id}`).then((res) => {
      if (res.data) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "task deleted",
          showConfirmButton: false,
          timer: 1500,
        });
        fetchp();
      }
    });
  };

  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{idx + 1}</th>
        <td>{info.title}</td>
        <td>
          <button onClick={() => document.getElementById(info._id).showModal()}>
            task details
          </button>
        </td>
        <td>{info.quantity}</td>
        <td>{info.completionDate}</td>
        <td>
          <button onClick={() => handleDelete(info._id)}>Delete</button>
        </td>
      </tr>

      <dialog id={info._id} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg"></h3>
          <p className="py-4">{info.taskdetails}</p>
        </div>
      </dialog>
    </tbody>
  );
};

export default Managetasktable;
