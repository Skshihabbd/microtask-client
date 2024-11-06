import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "../checkoutcss/checkoutform.css";
import useAxiosSecure from "../Hooks2/useAxiosSecure";
// import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks2/useAxiosPublic";
import Swal from "sweetalert2";

const CheckOut = ({ info }) => {
  const { users } = useAuth();

  const stripe = useStripe();
  //   const navigate = useNavigate();

  const elements = useElements();

  const { prices, coins } = info;

  const coinConvert = parseInt(coins);
  const [disable, setDisable] = useState(true);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [cardError, setCardError] = useState("");
  const [process, setProcess] = useState(false);
  // my writing code functionality
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    if (prices >= 1) {
      getClientSecret({ totalPrice: prices });
    }
  }, [prices, coins]);
  const getClientSecret = async (totalPrice) => {
    const { data } = await axiosSecure.post(
      "/create-payment-intent",
      totalPrice
    );

    setClientSecret(data.clientSecret);
  };

  // my writing code functionality
  // user data get from server

  //   const  data= axiosPublic.get(`user?email=${users.email}`)

  const { data: user = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user?email=${users.email}`);
      return res.data;
    },
  });

  // user data get from server

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setProcess(true);
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

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
      // console.log("[error]", error);
      setCardError(error.message);
      setProcess(false);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
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
      console.log(paymentIntent.status);
      const paymentInfo = {
        date: new Date(),
      };
      delete paymentInfo._id;

      const userUpdate = {
        name: user.name,
        email: user.email,
        role: user.role,
        coin: user.coin + coinConvert,
        image: user.image,
      };

      console.log(userUpdate);
      try {
        console.log(userUpdate);
        axiosSecure.put(`/user/${user._id}`, userUpdate).then((res) => {
          console.log(res.data.modifiedCount);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "your file has been deleted",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      } catch (error) {
        console.log(error.message);
      }
    }
    setDisable(false);
    setProcess(false);
    // my writing code functionality
  };

  return (
    <div className="w-full  flex justify-center items-center ">
      <div className="w-full md:w-6/12    ">
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

          <div className="flex justify-center ">
            <button
              onSubmit={handleSubmit}
              type="submit"
              disabled={!stripe || !clientSecret || process}
              className=" rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
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
      </div>
    </div>
  );
};

export default CheckOut;
