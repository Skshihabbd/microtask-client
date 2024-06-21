import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../Hooks2/useAxiosSecure";

const TaskcreatorUpdate = () => {
  const data = useLoaderData();
  console.log(data);
  const axiosSecure = useAxiosSecure();

  const {
    completionDate,
    _id,
    creatorName,
    email,
    image,
    payableAmount,
    quantity,
    submissionInfo,
    taskdetails,
    title,
  } = data;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const taskTitle = form.title.value;
    const taskDetaile = form.details.value;
    const SubmissionDetails = form.submit.value;
    console.log(taskDetaile, taskTitle, SubmissionDetails);

    const updateInfo = {
      completionDate: completionDate,
      creatorName: creatorName,
      email: email,
      image: image,
      payableAmount: payableAmount,
      quantity: quantity,
      submissionInfo: SubmissionDetails,
      taskDetails: taskDetaile,
      title: taskTitle,
    };
    axiosSecure.put(`/taskcollectionupdate/${_id}`, updateInfo).then((res) => {
      if (res.data) {
        alert("data updated");
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task title</label> <br />
          <input
            required
            type="text"
            className="bg-slate-500 text-white w-full h-9 mb-6"
            name="title"
          />
          <label>Task Details</label> <br />
          <input
            required
            type="text"
            className="bg-slate-500 text-white w-full h-9 mb-6"
            name="details"
          />
          <label>submission details</label> <br />
          <input
            required
            type="text"
            className="bg-slate-500 text-white w-full h-9 mb-6"
            name="submit"
          />
        </div>

        <button className="btn btn-secondary w-full" type="submit">
          update
        </button>
      </form>
    </div>
  );
};

export default TaskcreatorUpdate;
