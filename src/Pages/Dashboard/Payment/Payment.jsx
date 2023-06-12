import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
  return (
    <div className="flex justify-center items-center p-20 h-96 my-20 bg-amber-600/20">
      <div className="w-1/2 mx-auto h-36 rounded-xl shadow-xl bg-white p-10">
        <Elements stripe={stripePromise}>
          <CheckOut></CheckOut>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;