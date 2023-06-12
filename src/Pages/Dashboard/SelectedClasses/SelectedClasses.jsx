import Swal from "sweetalert2";
import useSelectedClass from "../../../Hooks/useSelectedClass";
import { Link } from "react-router-dom";


const SelectedClasses = () => {
  const [selectedClasses, refetch] = useSelectedClass();
  const total = selectedClasses.reduce((sum, selectedClass) => parseInt(parseFloat(sum + selectedClass.price).toFixed(2)), 0)

  const handleRemove = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "if you remove this you have to add this class again",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it'
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://summer-sports-server.vercel.app/selectedclasses/${id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.deletedCount > 0) {
                refetch()
                Swal.fire({
                  icon: 'success',
                  title: 'Class has been removed',
                  showConfirmButton: false,
                  timer: 1000
                })
              }
            })
        }
      })
  }

  return (
    <div className="overflow-x-auto ">
      <div className="p-8 rounded-xl border-y mt-10 mb-7  border-amber-800 flex justify-around">
        {selectedClasses.length !== 0 ? <><p className="text-4xl font-bold text-center font-serif uppercase">total {selectedClasses.length} classes has selected</p>

          <div className="flex items-center">
            <p className="text-xl mr-3">Course fees: ${total}</p>
            <Link to='/dashboard/payment'>
              <button className="btn btn-outline btn-accent">Buy this classes</button>
            </Link>
          </div></> : <><p className="text-4xl font-bold text-center font-serif uppercase">no classes Added</p></>}
      </div>

      {selectedClasses.length !== 0 &&
        <table className="table border mb-14 text-center">

          <thead>
            <tr className="text-2xl">
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              selectedClasses.map(selectedClass => <tr key={selectedClass._id} className="text-xl">
                <td>
                  <img className="avatar w-14 h-14 mask mask-squircle" src={selectedClass.image} alt="classes picture" />
                </td>
                <td>{selectedClass.name}</td>
                <td>${selectedClass.price}</td>
                <td>
                  <button onClick={() => handleRemove(selectedClass._id)} className="btn btn-outline btn-error">Remove</button>
                </td>
              </tr>)
            }
          </tbody>

        </table>}
    </div>
  );
};

export default SelectedClasses;