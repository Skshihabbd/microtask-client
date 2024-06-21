import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks2/useAxiosSecure";

const TaskDetails = () => {
  const Data = useLoaderData();
  console.log(Data);

  const { users } = useAuth();
  console.log(users?.email);
  const axiosPublic = useAxiosSecure();

  const { data: userr = [], refetch } = useQuery({
    queryKey: ["userr"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/userr?email=${users?.email}`);
      return res.data;
    },
  });
  console.log(userr);
  // const {name}=userr
  // console.log(users?.email)
  const {
    _id,
    title,
    taskdetails,
    image,
    payableAmount,
    creatorName,
    email,
    currenttime,
  } = Data;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const SubmissionDetails = form.submitdetails.value;
    console.log(SubmissionDetails);

    const SubmissionInfo = {
      task_id: _id,
      task_title: title,
      task_details: taskdetails,
      task_img_url: image,
      payableAmount: payableAmount,
      worker_email: userr.email,
      submission_details: SubmissionDetails,
      worker_name: userr.name,
      creator_email: email,
      creator_name: creatorName,
      current_Date: currenttime,

      status: "pending",
    };
    axiosPublic.post("/tasksubmission", SubmissionInfo).then((res) => {
      if (res.data) {
        alert("data send successfully");
        form.reset();
      }
    });
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center gap-10 my-10  w-full ">
        <div className="lg:w-1/3">
          <img src={image} alt="" />
        </div>
        <div className="space-y-6 lg:text-2xl ">
          <h1>Title:{title}</h1>

          <p>Task Details:{taskdetails}</p>
          <p>Amout to pay:{payableAmount}</p>
          <p>Task creator: {creatorName}</p>
          <p>task Id:{_id}</p>
          <p>Task creator:{email.slice(0, 20)}</p>
          <p>date of creation:{currenttime}</p>
        </div>
      </div>
      <form className="" onSubmit={handleSubmit}>
        <label className="text-center lg:text-3xl ">Submission_Details</label>{" "}
        <br />
        <textarea
          className="bg-slate-600 text-white flex text-xl justify-center"
          name="submitdetails"
          id=""
          cols="20"
          rows="10"
        ></textarea>{" "}
        <br />
        <button className="btn btn-success">submit Details </button>
      </form>
    </div>
  );
};

export default TaskDetails;
