import usePayments from '../../../Hooks/usePayments';

const EnrolledClasses = () => {

  const [payments] = usePayments();

  return (
    <div className="overflow-x-auto ">
      <div className="p-8 rounded-xl border-y mt-10 mb-7  border-amber-800 flex justify-around">
        {payments.length !== 0 ? <><p className="text-4xl font-bold text-center font-serif uppercase">you have enrolled total {payments.length} times</p>
        </> : <><p className="text-4xl font-bold text-center font-serif uppercase">no classes Enrolled</p></>}
      </div>

      {payments.length !== 0 &&
        <table className="table border mb-14 text-center">

          <thead>
            <tr className="text-2xl">
              <th>Date</th>
              <th>Class Names</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {
              payments.map(payment => <tr key={payment._id} className="text-lg">
                <td>
                  {payment.date}
                </td>
                <td>{payment.name.map((string, index) => <li key={index}>{string}</li>)}</td>
                <td>{payment.status}</td>
              </tr>)
            }
          </tbody>

        </table>}
    </div>
  );
};

export default EnrolledClasses;