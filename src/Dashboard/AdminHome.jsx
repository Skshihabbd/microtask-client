import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks2/useAxiosSecure";
import Adminhomestate from "./Adminhomestate";
import Adminhometable from "./Adminhometable";


const AdminHome = () => {
  const axiosSecure =useAxiosSecure()
  const { data: adminhomeallpayment = [] ,refetch } = useQuery({
    queryKey: ["adminhomeallpayment"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminhomeallpayment");
      return res.data;
    },
  });

return(
  <div>
<div>
  <Adminhomestate></Adminhomestate>
</div> 
<div className="overflow-x-auto" >
<table className="table">
  <thead>
      <tr>
        <th></th>
        <th>worker_name</th>
        <th>withdraw_coin</th>
        <th>Withdraw amount</th>
        <th>Payment number</th>
        
        <th>payment_system</th>
        <th>withdraw_time</th>
        <th className="pr-28">Admin action</th>
      </tr>
    </thead>
    </table>
{
  adminhomeallpayment.map((info,idx)=><Adminhometable key={info._id} idx={idx} fetcher={refetch}  info={info} ></Adminhometable>)
}
</div>
  </div>
);
  
};

export default AdminHome;
