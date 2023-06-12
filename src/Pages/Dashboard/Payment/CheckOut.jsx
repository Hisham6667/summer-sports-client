import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const CheckOut = ({ selectedClasses, price }) => {

  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth()
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (price) {
      axiosSecure.post('/create-payment-intent', { price })
        .then(res => {
          setClientSecret(res.data.clientSecret);
        })
    }
  }, [price, axiosSecure])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      // console.log(error);
    }
    else {
      // console.log('paymentMethod', paymentMethod);
    }

    setProcessing(true)

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || "anonymous user",
          email: user?.email || "unknown email"
        }
      }
    })
    if (confirmError) {
      console.log(confirmError);
      Swal.fire({
        icon: 'error',
        title: (confirmError),
        showConfirmButton: false,
        timer: 2000
      })
    }
    // console.log("payment intent", paymentIntent);

    setProcessing(false)

    if (paymentIntent.status === 'succeeded') {
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        class_access: selectedClasses.length,
        selected_class_id: selectedClasses.map(selectedClass => selectedClass._id),
        class_id: selectedClasses.map(selectedClass => selectedClass.class_id),
        name: selectedClasses.map(selectedClass => selectedClass.name),
        date: new Date(),
        status: 'pending'
      }
      axiosSecure.post('/payments', payment)
        .then(res => {
          if (res.data.insertResult.insertedId) {
            navigate('/dashboard/paymenthistory')
            Swal.fire({
              icon: 'success',
              title: "payment successful",
              showConfirmButton: false,
              timer: 1000
            })
          }
        })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: { fontSize: '16px', color: '#424770', '::placeholder': { color: '#aab7c4' } },
            invalid: { color: '#9e2146', },
          },
        }}
      />
      <button className='btn btn-outline btn-sm mt-5 w-1/6' type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
  );
};

export default CheckOut;