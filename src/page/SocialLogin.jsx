import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks2/useAxiosPublic";


const SocialLogin = () => {
  const { googleSignIn, githubSignIn, users } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigation = useNavigate();
  console.log(users?.email);
  const handleSocialLogin = (sociallogin) => {
    const role = "worker";
    sociallogin().then((result) => {
      console.log(result.user);
      if (result.user) {
        navigation(location?.state ? location.state : "/");
      }
      let Coin = 0;
      if (role === "worker") {
        Coin = 10;
      }

      const userData = {
        name: users.displayName,
        email: users.email,
        role: role,
        coin: Coin,
        image: users.photoURL,
      };
      axiosPublic.post("/user", userData).then((res) => {
        if (res.data.insertedId) {
          alert("data send");
        }
      });
    });
  };
  return (
    <div className="flex flex-row gap-6">
      <button
        onClick={() => handleSocialLogin(googleSignIn)}
        className="btn btn-primary"
      >
        google
      </button>
      <button
        onClick={() => handleSocialLogin(githubSignIn)}
        className="btn btn-primary"
      >
        Github
      </button>
    </div>
  );
};

export default SocialLogin;
