import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';

const CheckOut = () => {

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if(error){
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: (error.message),
        showConfirmButton: false,
        timer: 2000
      })
    }
    else{
      console.log('paymentMethod', paymentMethod);
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
      <button className='btn btn-outline btn-sm mt-5 w-1/6' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckOut;