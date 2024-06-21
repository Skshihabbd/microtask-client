import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise=loadStripe()

const PaymentRoute = () => {
    return (
        <div>
           <h1>payment</h1> 



<div>
    <Elements stripe={stripePromise}>

    </Elements>
</div>



        </div>
    );
};

export default PaymentRoute;