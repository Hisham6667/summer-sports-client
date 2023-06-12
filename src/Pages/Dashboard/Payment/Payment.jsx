import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClass from "../../../Hooks/useSelectedClass";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
  const [selectedClasses] = useSelectedClass();
  const price = selectedClasses.reduce((sum, selectedClass) => parseInt(parseFloat(sum + selectedClass.price).toFixed(2)), 0)
  return (
    <div className="flex justify-center items-center p-20 h-96 my-20 bg-amber-600/20">
      <div className="w-1/2 mx-auto h-36 rounded-xl shadow-xl bg-white p-10">
        <Elements stripe={stripePromise}>
          <CheckOut selectedClasses={selectedClasses} price={price}></CheckOut>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;