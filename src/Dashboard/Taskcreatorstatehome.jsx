import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks2/useAxiosSecure";


const Taskcreatorstatehome = () => {
  const { users } = useAuth();

  const axiosPublic = useAxiosSecure();

  const { data: user = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user?email=${users.email}`);
      return res.data;
    },
  });
  console.log(user);

  const { data: taskhome = [] } = useQuery({
    queryKey: ["taskhome"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/taskcreatorhome?email=${users.email}`
      );
      return res.data;
    },
  });

  const sum = taskhome.reduce((accumulator, item) => {
    return accumulator + item.payableAmount;
  }, 0);

  const sum2 = taskhome.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);

  console.log(sum2);
  console.log(sum);
  console.log(taskhome);
  return (
    <div className="flex flex-row justify-around">
      <p>Available coin:{user.coin}</p>
      <p>pending task:{sum2}</p>
      <p>TotalPayment:{sum}Coin</p>
    </div>
  );
};

export default Taskcreatorstatehome;
