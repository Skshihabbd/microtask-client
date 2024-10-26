import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks2/useAxiosSecure";
import Swal from "sweetalert2";
import Countdownreact from "../components/Countdownreact";

const TaskDetails = () => {
  const Data = useLoaderData();
  console.log(Data);
  let [isOpen, setIsOpen] = useState(false);

  const { users } = useAuth();
  console.log(users?.email);
  const axiosPublic = useAxiosSecure();

  const { data: userr = [] } = useQuery({
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
    completionDate,
  } = Data;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

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
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "data send successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        form.reset();
        setIsOpen(false);
      }
    });
  };

  const openModal = () => {
    setIsOpen(true);
    console.log(isOpen);
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
          <p>Task creator:{email}</p>
          <p>date of end:{completionDate}T11:59:59s:59mili</p>
          <p>date of creation:{currenttime}</p>
          <div className=" w-60 ">
            <Countdownreact
              startDateTime={currenttime}
              endDateTime={completionDate}
            ></Countdownreact>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={openModal}
          className="btn btn-success w-full text-white"
        >
          Task Submission details
        </button>
      </div>
      {/* <form className="" onSubmit={handleSubmit}>
        <label className="text-center lg:text-3xl ">Submission_Details</label>{" "}
        <br />
        <textarea
          className="bg-slate-600 text-white flex text-xl justify-center"
          name="submitdetails"
          id=""
          cols="20"
          rows="10"
        ></textarea>
        <br />
        <button className="btn btn-success">submit Details </button>
      </form> */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative absolute z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-around p-4">
          <Dialog.Panel className="w-full max-w-sm rounded bg-black">
            <Dialog.Title className="text-center text-white lg:text-3xl ">
              Submission_Details
            </Dialog.Title>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center"
            >
              <textarea
                required
                className="bg-slate-600 text-white  text-xl "
                name="submitdetails"
                cols="30"
                rows="5"
              ></textarea>
              <br />
              <button className="btn btn-success">submit Details </button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default TaskDetails;
