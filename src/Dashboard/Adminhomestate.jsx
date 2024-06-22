import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks2/useAxiosSecure";

const Adminhomestate = () => {
  const axiosSecure = useAxiosSecure();

  const { data: adminhomealluser = [], refetch } = useQuery({
    queryKey: ["adminhomealluser"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminhomealluser");
      return res.data;
    },
  });
  const { data: adminhomeallpayment = [] } = useQuery({
    queryKey: ["adminhomeallpayment"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminhomeallpayment");
      return res.data;
    },
  });
  const sum = adminhomealluser.reduce((accumulator, item) => {
    return accumulator + item.coin;
  }, 0);

  console.log(adminhomeallpayment);
  return (
    <div className="flex flex-row justify-around">
      <p>Total Users:{adminhomealluser.length}</p> 
      <p>Total Coin:{sum}</p> 
      <p>Total Payment:{adminhomeallpayment.length}</p>
    </div>
  );
};

export default Adminhomestate;
