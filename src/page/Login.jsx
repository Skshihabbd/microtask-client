import useAuth from "../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";

// import { Helmet } from "react-helmet-async";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "./SocialLogin";
import { RxColorWheel } from "react-icons/rx";
//
// import Footer from "../../sharedcomponent/footer/Footer";
const Login = () => {
  const { SignIn, users, loader, setLoader } = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  const [success, setSuccess] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);
    SignIn(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(toast("login successfull"));

        reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((errores) => {
        console.log(errores.message);
        setError(toast("user Information is wrong"));
        setLoader(false);
      });
  };
  return (
    <div className="border-2 border-x-cyan-400 bg-cover w-full min-h-screen bg-[#F3F3F3] bg-[url('https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg')] py-10  ">
      {/* <Helmet>
                <title>realstate |login</title>
            </Helmet>
  <Navber></Navber> */}
      <div className="lg:w-3/4 mx-auto  my-8 bg-slate-800 bg-opacity-25">
        <h1 className="text-center mb-10">Login your account</h1>
        <hr className="w-5/6 mx-auto mb-12" />
        <div className="px-16 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="h-16">
              <label For="emails" className="text-white">
                Email{" "}
              </label>
              <br />
              <input
                className="w-full bg-[#F3F3F3] mb-1 h-10 outline-0 rounded-sm"
                type="email"
                name="email"
                id="emails"
                required
                placeholder="Enter your email address "
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-white">This field is required</span>
              )}
            </div>
            <br />
            <label For="passcode" className="text-white">
              Password
            </label>
            <br />
            <div className="h-16">
              <input
                className="w-full bg-[#F3F3F3] mb-1 h-10 outline-0 rounded-sm"
                type="password"
                name="password"
                id="passcode"
                required
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-white">This field is required</span>
              )}
              <p>{error}</p>
            </div>

            <button
              disabled={loader}
              className="w-full btn btn-secondary my-3 "
            >
              {loader ? (
                <RxColorWheel className="animate-spin mx-auto text-white text-3xl" />
              ) : (
                " Login"
              )}
            </button>
          </form>

          {users ? (
            <p> {success}</p>
          ) : (
            <p className="text-center text-white">
              Login or Go to register
              <Link to="/register" className="text-green-500  ml-3">
                Register
              </Link>
            </p>
          )}
        </div>
        <div className=" flex justify-center">
          <SocialLogin></SocialLogin>
        </div>
      </div>
      {/* <Footer></Footer> */}
      <ToastContainer />
    </div>
  );
};

export default Login;
