import useSelectedClass from "../../../Hooks/useSelectedClass";


const SelectedClasses = () => {
  const [selectedClasses, refetch] = useSelectedClass();

  const handleRemove = () => {
    refetch()
  }
  const handlePayment = () => {}

  return (
    <div className="overflow-x-auto ">
      <p className="text-4xl font-bold p-8 text-center rounded-xl border-y  border-amber-800 font-serif uppercase mt-7 mb-14">all selected classes are down below</p>
      <table className="table border mb-14 text-center">

        <thead>
          <tr className="text-2xl">
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            selectedClasses.map(selectedClass => <tr key={ selectedClass._id} className="text-xl">
              <td>
                <img className="avatar w-14 h-14 mask mask-squircle" src={selectedClass.image} alt="classes picture" />
              </td>
              <td>{selectedClass.name}</td>
              <td>${selectedClass.price}</td>
              <td>
                <button onClick={handleRemove} className="btn btn-outline btn-error">Remove</button>
              </td>
              <td>
                <button onClick={handlePayment} className="btn btn-outline btn-accent">Buy class</button>
              </td>
            </tr>)
          }
        </tbody>

      </table>
    </div>
  );
};

export default SelectedClasses;