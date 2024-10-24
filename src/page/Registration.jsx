import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import SocialLogin from "./SocialLogin";
import useAxiosPublic from "../Hooks2/useAxiosPublic";
import Swal from "sweetalert2";
import { RxColorWheel } from "react-icons/rx";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { SignUp, updateUser, loader, setLoader } = useAuth();
  const [error, setError] = useState("");
  const loaction = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (datas) => {
    const email = datas.email;
    const password = datas.password;
    const name = datas.UserName;
    const image = datas.photourl[0];
    const role = datas.role;
    console.log(image);
    console.log(email, password, name, role, image);
    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://api.imgbb.com/1/upload?key=9c8539154be0bafb013ab02d1bbf342b",
        formData
      );
      console.log(data.data.display_url);
      const result = await SignUp(email, password);
      console.log(result.user);
      updateUser(name, data.data.display_url);

      let Coin = 0;
      if (role === "worker") {
        Coin = 10;
      } else if (role === "task creator") {
        Coin = 50;
      }
      const userData = {
        name: name,
        email: email,
        role: role,
        coin: Coin,
        image: data.data.display_url,
      };
      axiosPublic.post("/user", userData).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "data send",
            showConfirmButton: false,
            timer: 1500,
          });

          reset();
          navigate(loaction?.state ? location.state : "/");
        }
      });

      setLoading(false);
    } catch (errors) {
      console.log(errors.message);
      setError(errors.message);
      setLoader(false);
      setLoading(false);
    }
  };

  return (
    <div className=" relative bg-cover h-auto bg-[url('https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg')] border-x-cyan-400 w-full  bg-[#F3F3F3]   ">
      {/* <Helmet>
         <title>Register</title>
       </Helmet>   */}

      {/* <Helmet>
         <body><p>home|shihab</p></body>
       </Helmet> */}

      <div className=" lg:w-3/4 mx-auto  my-2 bg-slate-700 bg-opacity-25">
        <h1 className="text-center mb-2 text-white">Register your account</h1>
        <hr className="w-5/6 mx-auto mb-2" />
        <div className="px-16 ">
          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <div className="h-16">
              <label For="texts" className="text-white ">
                Your Name
              </label>
              <br />
              <input
                className="w-full bg-[#F3F3F3] mb-1 h-10 outline-0 rounded-sm"
                type="text"
                name="name"
                id="texts"
                placeholder="Enter your name"
                {...register("UserName", { required: true })}
              />
              {errors.UserName && (
                <span className="text-white">This field is required</span>
              )}
            </div>
            <br />
            <label For="urll" className="text-white">
              Photo
            </label>
            <br />
            <div className="h-12">
              <input
                className="w-full bg-[#F3F3F3] mb-1 h-10 outline-0 rounded-sm"
                type="file"
                accept="image/*"
                name="url"
                id="urll"
                placeholder="Enter Photo URL"
                {...register("photourl", {
                  required: "image is required",
                })}
              />
              {errors.photourl && (
                <span className="text-white">{errors.photourl.message}</span>
              )}
            </div>
            <br />
            <div className="h-8">
              <select
                className="w-full h-10 outline-0 rounded-sm"
                {...register("role", { required: "Please select a role" })}
              >
                <option disabled selected value="">
                  Select your role
                </option>
                <option value="worker">Worker</option>
                <option value="task creator">Task creator</option>
                <option value="">you have to select one </option>
              </select>
              {errors.role && (
                <span className="text-white  ">{errors.role.message}</span>
              )}
            </div>
            <br />
            <div className="h-20 lg:h-16">
              <label For="emails" className="text-white">
                Email
              </label>
              <br />
              <input
                className="w-full bg-[#F3F3F3] mb-1 h-10 outline-0 rounded-sm"
                type="email"
                name="email"
                id="emails"
                required
                placeholder="Enter your email address"
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
                onFocus={() => {
                  setError("");
                }}
              />
              {errors.email && (
                <span className="text-white">{errors.email.message}</span>
              )}
              <p className="text-white">{error}</p>
            </div>
            <br />

            <div className="relative h-28 lg:h-16">
              <label For="passcode" className="text-white">
                Password
              </label>
              <br />
              <input
                className="w-full bg-[#F3F3F3] mb-1 h-10 outline-0 rounded-sm"
                type={showPassword ? "text" : "password"}
                name="password"
                id="passcode"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  maxLength: {
                    value: 16,
                    message: "Password must not exceed 16 characters",
                  },

                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message:
                      "Password must have at least one uppercase,one lowercase, and one number",
                  },
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className=" absolute right-10 top-8"
              >
                {showPassword ? (
                  <IoEye className="text-yellow-700 text-xl" />
                ) : (
                  <IoEyeOff className="text-xl text-black" />
                )}
              </button>
              {errors.password && (
                <span className="text-white">{errors.password.message}</span>
              )}
            </div>
            <br />
            <div className=" h-12 lg:h-12">
              <input
                className="mb-"
                type="checkbox"
                name="checkbox"
                id="check"
                {...register("checkbook", { required: true })}
              />
              <label For="check" className="text-white mb-4 ">
                Accept Term & Conditions
              </label>
              <br />
              {errors.checkbook && (
                <span className="text-white ">This field is required</span>
              )}
            </div>
            <button
              disabled={loading}
              type="submit"
              className="w-full btn btn-primary  mt-6  md:mt-0"
            >
              {loading ? (
                <RxColorWheel className="animate-spin mx-auto text-white text-3xl" />
              ) : (
                "Register"
              )}
            </button>
          </form>

          <p className="text-center text-white">
            Have an account
            <Link to="/login" className="text-green-500">
              Login
            </Link>
          </p>
        </div>
        <div className=" flex justify-center">
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Registration;
