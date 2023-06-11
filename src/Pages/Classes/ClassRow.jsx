import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";


const ClassRow = ({ singleclass }) => {
  const { image, name, instructor_name, available_seats, price } = singleclass;
  const { user } = useAuth();
  const navigate = useNavigate()

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
            navigate('/login')
          }
        })
    }
  }

  return (
    <tr className="text-xl">
      <td>
        <img src={image} alt="classes picture" />
      </td>
      <td>{name}</td>
      <td>{instructor_name}</td>
      <td className={available_seats===0 ? 'text-red-500' : ''}>{available_seats} seats available</td>
      <td>${price}</td>
      <td>
        <button onClick={handleSelect} disabled={available_seats === 0} className="btn btn-outline btn-accent">Select</button>
      </td>
    </tr>
  );
};

export default ClassRow;