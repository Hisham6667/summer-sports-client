import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAdmin from "../../Hooks/useAdmin";


const ClassRow = ({ singleclass }) => {
  const { _id, image, name, instructor_name, available_seats, price } = singleclass;
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();

  const handleSelect = () => {
    if (!user) {
      return Swal.fire({
        title: 'You have to login first',
        text: "do you want to login",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, login'
      })
        .then((result) => {
          if (result.isConfirmed) {
            return navigate('/login')
          }
        })
    }

    axios.post('https://summer-sports-server.vercel.app/selectedclasses', { class_id: _id, image, name, price, email: user.email })
      .then(data => {
        console.log(data.data);
        if (data.data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Your class added successfully',
            showConfirmButton: false,
            timer: 800
          })
        }
      })

  }

  return (
    <tr className="text-xl">
      <td>
        <img className="avatar w-14 h-14 mask mask-squircle" src={image} alt="classes picture" />
      </td>
      <td>{name}</td>
      <td>{instructor_name}</td>
      <td className={available_seats === 0 ? 'text-red-500' : ''}>{available_seats} seats available</td>
      <td>${price}</td>
      <td>
        <button onClick={handleSelect} disabled={available_seats === 0 && isAdmin} className="btn btn-outline btn-accent">Select</button>
      </td>
      
    </tr>
  );
};

export default ClassRow;