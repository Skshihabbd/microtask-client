import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "../checkoutcss/checkoutform.css";
import useAxiosSecure from "../Hooks2/useAxiosSecure";
// import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const CheckOut = ({ info }) => {
  console.log(info.prices);
  const { users } = useAuth();
  console.log(users?.email);
  const stripe = useStripe();
  //   const navigate = useNavigate();
  console.log("my stripe true or false", stripe);
  const elements = useElements();

  const { prices, coins } = info;
  console.log(coins, prices);
  const axiosSecure = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [process, setProcess] = useState(false);
  // my writing code functionality
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    if (prices > 1) {
      getClientSecret({ totalPrice: prices });
    }
  }, [prices, coins]);
  const getClientSecret = async (totalPrice) => {
    const { data } = await axiosSecure.post(
      "/create-payment-intent",
      totalPrice
    );
    console.log("client secret from server", data);
    setClientSecret(data.clientSecret);
  };

  // my writing code functionality

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setProcess(true);
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    console.log("my stripe true or false", stripe);
    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProcess(false);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    // my writing code functionality
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: users?.email,
            name: users?.displayName,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      setProcess(false);
    }
    if (paymentIntent?.status === "succeeded") {
      console.log(paymentIntent);
      const paymentInfo = {
        date: new Date(),
      };
      delete paymentInfo._id;
      console.log(paymentInfo);
      //   try {
      //     const { data } = await axiosSecure.post("/bookings", paymentInfo);
      //     console.log(data);

      //     // navigate("/dashboard/my-bookings");
      //   } catch (err) {
      //     console.log(err.message);
      //   }
    }
    setProcess(false);
    // my writing code functionality
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div className="flex mt-2 justify-around">
          <button
            onSubmit={handleSubmit}
            type="submit"
            disabled={!stripe || !clientSecret || process}
            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            {process ? (
              <ImSpinner9 className="animate-spin m-auto size={24}" />
            ) : (
              `Pay$ ${prices}`
            )}
          </button>
          {/* <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
              onClick={closeModal}
            >
              cancel
            </button> */}
        </div>
      </form>
      {cardError && <p className="text-red-600 ">{cardError}</p>}
    </>
  );
};

export default CheckOut;
