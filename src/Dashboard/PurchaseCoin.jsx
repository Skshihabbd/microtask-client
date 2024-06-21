import { Link } from "react-router-dom";


const PurchaseCoin = () => {
    return (
        <div className="space-y-8">
            
           <div className="flex my-3 "><p className=" pt-2 rounded-xl bg-green-800 text-white text-center w-9/12">10 coins = 1 dollar</p><Link className="w-3/12 " to={'/dashboard/paymentroute'}><button className="btn w-full btn-success">Pay</button></Link></div>
           <div className="flex my-3 "><p className=" pt-2 rounded-xl bg-green-800 text-white text-center w-9/12"> 100 coins = 9 dollars
           </p><Link className="w-3/12 " to={'/dashboard/paymentroute'}><button className="btn w-full btn-success">Pay</button></Link></div>
           <div className="flex my-3 "><p className=" pt-2 rounded-xl bg-green-800 text-white text-center w-9/12">500 coin = 19 dollars</p><Link className="w-3/12 " to={'/dashboard/paymentroute'}><button className="btn w-full btn-success">Pay</button></Link></div>
           <div className="flex my-3 "><p className=" pt-2 rounded-xl bg-green-800 text-white text-center w-9/12">1000 coin = 39 dollar</p><Link className="w-3/12 " to={'/dashboard/paymentroute'}><button className="btn w-full btn-success">Pay</button></Link></div>
        </div>
    );
};

export default PurchaseCoin;