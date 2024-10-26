import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks2/useAxiosSecure";

const TaskcreatorHometable = ({ info, idx, fetche }) => {
  // const[datas,setdata]=useState({})
  const axiosPublic = useAxiosSecure();

  console.log(info);

  const handleUserDataget = async (emails, id) => {
    await fetch(
      `https://server-side-nu-sooty.vercel.app/usercreatorhomes?email=${emails}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          updateStatus(data, id);
        }
      });

    console.log("shihab", emails);
  };

  const updateStatus = (e, id) => {
    console.log(e);
    console.log(e._id);
    console.log(id);
    console.log("baridhara", e);
    const payamount = info.payableAmount;
    const userCoinupdate = {
      name: e.name,
      email: e.email,
      role: e.role,
      coin: e.coin + payamount,
      image: e.image,
    };
    console.log(userCoinupdate);

    const updateInfo = {
      task_id: info.task_id,
      task_title: info.task_title,
      task_details: info.task_details,
      task_img_url: info.task_img_url,
      payableAmount: info.payableAmount,
      worker_email: info.worker_email,
      creator_email: info.creator_email,
      creator_name: info.creator_name,
      current_Date: info.current_Date,
      status: "approved",
    };

    console.log(updateInfo);

    axiosPublic.put(`/hometaskupdate/${id}`, updateInfo).then((res) => {
      if (res.data) {
        fetche();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Submit data stutas updated",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
    axiosPublic
      .put(`/useruphomrcreator/${e._id}`, userCoinupdate)
      .then((res) => {
        if (res.data) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User coin updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    // Swal.fire({
    //     title: "Are you sure?",
    //     text: "You won't be able to revert this!",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Yes, update it!"
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //
    //         // const userCoinupdate={
    //         //     name:datas?.name,
    //         //     email:datas?.email,
    //         //     role:datas?.role,
    //         //     coin:datas?.coin+payamount,
    //         //     image:datas?.image
    //         // }
    //         // console.log(userCoinupdate,id)
    //         //

    //       Swal.fire({
    //         title: "updated!",
    //         text: "Your file has been updated.",
    //         icon: "success"
    //       });
    //     }
    //   });

    // // console.log('baridha',id)

    // console.log(updateInfo)

    // // axiosPublic.put()
  };

  const rejectStatus = (e) => {
    console.log(e);
    const updateInfo = {
      task_id: info.task_id,
      task_title: info.task_title,
      task_details: info.task_details,
      task_img_url: info.task_img_url,
      payableAmount: info.payableAmount,
      worker_email: info.worker_email,
      creator_email: info.creator_email,
      creator_name: info.creator_name,
      current_Date: info.current_Date,
      status: "rejected",
    };
    axiosPublic.put(`/hometaskupdate/${e}`, updateInfo).then((res) => {
      if (res.data) {
        fetche();
      }
    });
    // console.log(updateInfo)
  };

  return (
    <tbody>
      <tr>
        <th>{idx + 1}</th>
        <td>{info.task_title}</td>
        <td>
          {info.worker_name}
          <br />
          <span className="badge badge-ghost badge-sm">
            {info.worker_email}
          </span>
          <br />
          <span>status:{info.status}</span>
        </td>
        <td>
          <button onClick={() => document.getElementById(info._id).showModal()}>
            click to view details
          </button>
          {/* {updateStatus(info._id ,datas._id) */}
        </td>
        <th>
          <details className="dropdown">
            <summary className="m-1 btn">update status</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <button
                  onClick={() => {
                    handleUserDataget(info.worker_email, info._id);
                  }}
                >
                  Approved
                </button>
              </li>
              <li>
                <button onClick={() => rejectStatus(info._id)}>reject</button>
              </li>
            </ul>
          </details>
        </th>
      </tr>
      <dialog id={info._id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg border-b-4">Submission Details</h3>
          <p className="py-4">{info.submission_details}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </tbody>
  );
};

export default TaskcreatorHometable;
