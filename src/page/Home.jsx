import { useQuery } from "@tanstack/react-query";
import Banner from "../Section/Homesection/Banner";
import { FaCoins } from "react-icons/fa";
import { MdOutlineAppRegistration, MdOutlineTaskAlt } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { RiCoinsFill } from "react-icons/ri";
import { VscTasklist } from "react-icons/vsc";
import useAxiosSecure from "../Hooks2/useAxiosSecure";
import TopEarner from "../Section/Homesection/TopEarner";
import Testimonial from "../Section/Homesection/Testimonial";

const Home = () => { 
const axiosSecure=useAxiosSecure()
    const { data: homepagedata = [] ,refetch } = useQuery({
        queryKey: ["homepagedata"],
        queryFn: async () => {
          const res = await axiosSecure.get("/homepagedata");
          return res.data;
        },
      });




  return (
    <div className="">
      <Banner></Banner>

      <div className="h-screen my-16 space-y-12 lg:space-y-28 bg-black bg-opacity-25   ">
        <h1 className="flex  items-center gap-6">
          <FaCoins className="lg:text-7xl text-red-600" />
          <p className="lg:text-7xl">Earn Coin by completing task</p>
        </h1>
        <h1 className="flex  items-center gap-6">
          <MdOutlineTaskAlt className="lg:text-7xl text-red-600" />
          <p className="lg:text-7xl" >create and manage task</p>
        </h1>
        <h1 className="flex  items-center gap-6">
          <MdOutlinePayment className="lg:text-7xl text-red-600" />
          <p className="lg:text-7xl" >secure payment</p>
        </h1>
      </div> 
      <div className="h-screen my-16 space-y-11 lg:space-y-28 bg-black bg-opacity-25   ">
        <h1 className="flex  items-center gap-6">
          <MdOutlineAppRegistration className="lg:text-7xl text-red-600" />
          <p className="lg:text-7xl">Register to earn</p>
        </h1>
        <h1 className="flex  items-center gap-6">
          <VscTasklist className="lg:text-7xl text-red-600" />
          <p className="lg:text-7xl" >complete Task wisely</p>
        </h1>
        <h1 className="flex  items-center gap-6">
          <RiCoinsFill className="lg:text-7xl text-red-600" />
          <p className="lg:text-7xl" >Earn Reward</p>
        </h1>
      </div> 
      <div className="grid lg:grid-cols-6  gap-6 ">
        {
homepagedata.map(info=><TopEarner key={info._id} info={info} futur={refetch}></TopEarner>)
        }
      </div>
      <div>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
