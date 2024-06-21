import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";

import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks2/useAxiosSecure";

const WithDrawals = () => {
  const axiosPublic = useAxiosSecure();
  const { users } = useAuth();
  console.log(users);
  const { data: userworkerhomes = [], refetch } = useQuery({
    queryKey: ["userworkerhomes"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/userworkerhomes?email=${users.email}`
      );
      return res.data;
    },
  });
  console.log(userworkerhomes);

  const { data: userworkerhomessubmitpay = [] } = useQuery({
    queryKey: ["userworkerhomessubmitpay"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/userworkerhomessubmitpay?email=${users.email}`
      );
      return res.data;
    },
  });

  console.log(userworkerhomessubmitpay);

  const sum = userworkerhomessubmitpay.reduce((accumulator, item) => {
    return accumulator + item.payableAmount;
  }, userworkerhomes.coin);

  console.log(userworkerhomes.coin);

  console.log(sum);
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;

    const withdrawCoin = parseInt(from.withdrawcoin.value);

    const perDollar = 20;
    const withdrawAmount = withdrawCoin / perDollar;
    const currenttime = from.submittime.value;
    const paymentSystem = from.system.value;
    const accountnumber = from.accountnumber.value;
    console.log(typeof withdrawAmount);

    console.log(
      withdrawCoin,
      withdrawAmount,
      currenttime,
      paymentSystem,
      accountnumber
    );

    const postInfo = {
      WithdrawCoin: withdrawCoin,
      withdrawAmount: withdrawAmount,
      currenttime: currenttime,
      paymentSystem: paymentSystem,
      accountnumber: accountnumber,
      worker_email: userworkerhomes.email,
      worker_name: userworkerhomes.name,
      available_coin: sum,
    };
    console.log(postInfo);

    const userUpdate = {
      name: userworkerhomes.name,
      email: userworkerhomes.email,
      role: userworkerhomes.role,
      coin: 10,
      image: userworkerhomes.image,
    };

    console.log(userUpdate);
    if (withdrawCoin > userworkerhomes.coin) {
      alert("not avaiable coin for withdraw");
    } else {
      axiosPublic.post("/withdraw", postInfo).then((res) => {
        if (res.data) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "data has been posted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

      axiosPublic
        .put(`/withdrawuser/${userworkerhomes._id}`, userUpdate)
        .then((res) => {
          if (res.data) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "data has been updated",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };
  return (
    <div>
      <div className="w-full bg-black h-8 text-2xl">
        <h1 className="text-center text-white">20 coin=1 dollar</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label>Coin to Withdraw</label> <br />
          <input
            required
            defaultValue={"Withdraw Coin Amount"}
            type="number"
            className="bg-slate-500 text-white w-full h-9 mb-6"
            name="withdrawcoin"
          />
          <label>Current Date</label> <br />
          <input
            required
            className="bg-slate-500 text-white mb-6 w-full h-9"
            type="datetime-local"
            name="submittime"
            id=""
          />
          {/* <label>Withdraw Amount</label> <br />
<input required defaultValue={'withdrawAmount'} type="number" name="withdrawamount" id="" className="bg-slate-500 text-white mb-6 w-full h-9" />  */}
          <select
            required
            name="system"
            className="select select-primary mb-6  w-full"
          >
            <option disabled selected>
              What is the best TV show?
            </option>

            <option value={"bkash"}>Bkash</option>
            <option value={"rocket"}>Rocket</option>
            <option value={"nagad"}>Nagad</option>
          </select>
          <br />
          <label>Account Number</label> <br />
          <input
            defaultValue={"Account Number start with +880"}
            className="bg-slate-500 mb-6 text-white w-full h-9"
            type="number"
            name="accountnumber"
            required
            id=""
          />
        </div>
        <button type="submit" className="btn btn-success w-full">
          Withdraw Now
        </button>
      </form>
    </div>
  );
};

export default WithDrawals;
