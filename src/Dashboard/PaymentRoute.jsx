import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import CheckOut from "./CheckOut";
import { useState } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
//  const stripePromise=loadStripe()

const PaymentRoute = () => {
  const { coin, price } = useParams();
  console.log(coin, price);
  //   const [coins, setCoin] = useState(coin);
  //   const [prices, setPrice] = useState(price);
  return (
    <div>
      <h1>payment</h1>

      <div>
        <Elements stripe={stripePromise}>
          <CheckOut info={{ coins: coin, prices: price }}></CheckOut>
        </Elements>
      </div>
    </div>
  );
};

export default PaymentRoute;
