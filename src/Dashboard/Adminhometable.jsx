import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks2/useAxiosSecure";

const Adminhometable = ({ info, idx, fetcher }) => {
  const axiosSecure = useAxiosSecure();
  const handledataget = async (email, id) => {
    // console.log(email,id)
    await fetch(
      `https://server-side-nu-sooty.vercel.app/usercreatorhomes?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          updateStatus(data, id);
        }
      });
  };
  const updateStatus = (data, id) => {
    console.log(data, id);

    const updateUser = {
      name: data.name,
      email: data.email,
      coin: data.coin - info.WithdrawCoin,
      image: data.image,
      role: data.role,
    };

    axiosSecure
      .put(`/adminhomeallpayment/${data._id}`, updateUser)
      .then((res) => {
        if (res.data) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User coin updated  ",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    axiosSecure.delete(`/adminhomeallpayment/${id}`).then((res) => {
      if (res.data) {
        fetcher();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "withdraw data deleted",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr>
              <th>{idx + 1}</th>
              <td>{info.worker_name}</td>
              <td>{info.WithdrawCoin}</td>
              <td>{info.withdrawAmount}$</td>
              <td>{info.accountnumber}</td>
              <td>{info.paymentSystem}</td>
              <td>{info.currenttime}</td>
              <td>
                <button
                  onClick={() => handledataget(info.worker_email, info._id)}
                  className="btn btn-outline"
                >
                  {" "}
                  Payment success
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adminhometable;
