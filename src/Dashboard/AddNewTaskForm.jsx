import axios from "axios";

import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks2/useAxiosSecure";

const AddNewTaskForm = ({ info, fetch }) => {
  const { refetch } = fetch;
  const { coin, email, name, role, _id, image } = info;
  const axiosPublic = useAxiosSecure();
  // console.log(typeof coin)
  const SubmitTask = async (event) => {
    event.preventDefault();
    const from = event.target;
    //  console.log(from)
    const taskTitle = from.title.value;
    const taskdetails = from.details.value;
    const completionDate = from.date.value;
    const taskQuantity = parseInt(from.quantity.value);
    const payableAmount = parseInt(from.payamount.value);
    const allPayAmount = taskQuantity * payableAmount;
    const submitInfo = from.submissioninfo.value;
    const images = from.images.files[0];
    const currenttime = from.currenttime.value;
    console.log(
      allPayAmount,
      taskTitle,
      taskdetails,
      completionDate,
      submitInfo,
      images
    );

    const formData = new FormData();
    formData.append("image", images);
    const { data } = await axios.post(
      "https://api.imgbb.com/1/upload?key=9c8539154be0bafb013ab02d1bbf342b",
      formData
    );
    console.log(data.data.display_url, "image url we");
    const taskInfo = {
      title: taskTitle,
      taskdetails: taskdetails,
      completionDate: completionDate,
      quantity: taskQuantity,
      payableAmount: allPayAmount,
      submissionInfo: submitInfo,
      image: data.data.display_url,
      email: email,
      creatorName: name,
      currenttime: currenttime,
    };

    const remainingCoin = coin - allPayAmount;
    const userUpdate = {
      name: name,
      email: email,
      role: role,
      coin: remainingCoin,
      image: image,
    };

    if (allPayAmount > coin) {

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: " not available coin please purchase coin",
        footer: '<a href="#"> not available coin please purchase coin</a>'
      });
     
    } else
      axiosPublic.post("/taskcreator", taskInfo).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "task has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }),
        axiosPublic.put(`/user/${_id}`, userUpdate).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            fetch();
            from.reset();
          }
        });
  };

  return (
    <div>
      <div>
        <form onSubmit={SubmitTask}>
          <div className="lg:grid lg:grid-cols-2 gap-3">
            <div>
              <label>Task title</label> <br />
              <input
                name="title"
                className="bg-slate-500 text-white w-full h-9"
                required
                type="text"
              />
            </div>
            <div>
              <label>Task_details</label> <br />
              <input
                name="details"
                className="bg-slate-500 text-white w-full h-9"
                required
                type="text"
              />
            </div>

            <div>
              <label> Completion date</label>
              <input
                name="date"
                className="bg-slate-600 text-white w-full h-9"
                required
                type="date"
                id=""
              />
            </div>
            <div>
              <label>Task Quantity</label>
              <input
                className="bg-slate-500 text-white w-full h-9"
                required
                type="number"
                name="quantity"
                id=""
              />
            </div>
            <div>
              <label>image</label>
              <input
                className="bg-slate-500 text-white w-full h-9"
                required
                type="file"
                name="images"
                id=""
              />
            </div>
            <div>
              <label>Payable Amount</label>
              <input
                className="bg-slate-500 text-white w-full h-9"
                required
                type="number"
                name="payamount"
                id=""
              />
            </div>
            <div>
              <label>current date and time</label>
              <input
                className="bg-slate-500 text-white w-full h-9"
                required
                type="datetime-local"
                name="currenttime"
                id=""
              />
            </div>
          </div>

          <div>
            <label>Submission Info</label>
            <input
              className="bg-slate-500 col-span-2 text-white w-full  h-16"
              required
              type="text"
              name="submissioninfo"
              id=""
            />
          </div>
          <button className="btn btn-secondary w-full mt-8" type="submit">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewTaskForm;
