import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import SocialLogin from "./SocialLogin";
import useAxiosPublic from "../Hooks2/useAxiosPublic";

// import useAxiosPublic from "../Hooks/useAxiosPublic ";
// const imgbb_api_key=import.meta.env.IMGBB_API_KEY
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imgbb_api_key}`;
const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { SignUp, updateUser } = useAuth();
  const [error, setError] = useState(" ");
  const loaction = useLocation();
  const navigate = useNavigate();
  const axiosPublic =useAxiosPublic()

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
    const { data } = await axios.post(
      "https://api.imgbb.com/1/upload?key=9c8539154be0bafb013ab02d1bbf342b",
      formData
    );
    console.log(data.data.display_url);
    SignUp(email, password)
      .then((result) => {
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
            alert("data send");
            reset();
            navigate(loaction?.state ? location.state : "/");
          }
        });

        // if(result.user) {

        // }
      })
      .catch((errors) => {
        console.log(errors.message);
        setError(errors.message);
      });
  };

  return (
    <div className="border-2  bg-cover bg-[url('https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg')] border-x-cyan-400 w-full min-h-screen bg-[#F3F3F3]   ">
      {/* <Helmet>
         <title>Register</title>
       </Helmet>   */}

      {/* <Helmet>
         <body><p>home|shihab</p></body>
       </Helmet> */}

      <div className=" lg:w-2/4 mx-auto border-2 my-2 bg-slate-700 bg-opacity-25">
        <h1 className="text-center mb-2 text-white">Register your account</h1>
        <hr className="w-5/6 mx-auto mb-2" />
        <div className="px-16 ">
          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <label For="texts" className="text-white">
              Your Name
            </label>
            <br />
            <input
              className="w-full bg-[#F3F3F3] mb-4 h-10 outline-0"
              type="text"
              name="name"
              id="texts"
              placeholder="Enter your name"
              {...register("UserName", { required: true })}
            />
            {errors.UserName && <span>This field is required</span>}
            <br />
            <label For="urll" className="text-white">
              Photo Url
            </label>
            <br />
            <input
              className="w-full bg-[#F3F3F3] mb-4 h-10 outline-0"
              type="file"
              name="url"
              id="urll"
              placeholder="Enter Photo URL"
              {...register("photourl", {
                required: "url is required",
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: "Please enter a valid URL",
                },
              })}
            />
            {errors.photourl && <span>{errors.photourl.message}</span>}
            <br />
            <div>
              <select
                className="w-full h-8"
                {...register("role", { required: true })}
              >
                <option selected disabled value="worker">
                  Select your role
                </option>
                <option value="worker">Worker</option>
                <option value="task creator">Task creator</option>
              </select>
            </div>
            <br />
            <label For="emails" className="text-white">
              Email
            </label>
            <br />
            <input
              className="w-full bg-[#F3F3F3] mb-1 h-10 outline-0"
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
            />
            {errors.email && <span>{errors.email.message}</span>}
            <p className="text-white">{error}</p>
            <br />
            <label For="passcode" className="text-white">
              Password
            </label>
            <br />
            <input
              className="w-full bg-[#F3F3F3] mb-4 h-10 outline-0"
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
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                  message:
                    "Password must include at least one uppercase letter, one lowercase letter, and one number",
                },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className=" absolute right-10 bottom-[7.813rem] "
            >
              {showPassword ? (
                <IoEye className="text-yellow-700 text-xl" />
              ) : (
                <IoEyeOff className="text-xl text-black" />
              )}
            </button>
            {errors.password && (
              <span className="text-red-800">{errors.password.message}</span>
            )}
            <br />
            <input
              type="checkbox"
              name="checkbox"
              id="check"
              {...register("checkbook", { required: true })}
            />
            <label For="check" className="text-white">
              Accept Term & Conditions
            </label>{" "}
            <br />
            {errors.checkbook && <span>This field is required</span>}
            <button type="submit" className="w-full btn btn-primary my-3 ">
              Register
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
