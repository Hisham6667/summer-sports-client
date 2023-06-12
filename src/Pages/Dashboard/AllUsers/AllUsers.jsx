import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users')
    return res.data
  })

  const handleMakeAdmin = id => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          refetch()
          Swal.fire({
            icon: 'success',
            title: 'user made admin he can now access this page',
            showConfirmButton: false,
            timer: 1000
          })
        }
      })
  }

  const handleRemove = id => {
    Swal.fire({
      title: 'Are you sure you want to remove this user?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it'
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.deletedCount > 0) {
                refetch()
                Swal.fire({
                  icon: 'success',
                  title: 'user has been removed',
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
      <p className="text-4xl font-bold p-8 border border-teal-300 text-center rounded-full shadow-xl bg-amber-600/20 font-serif uppercase mt-7 mb-14">all classes are down below</p>
      <table className="table border mb-14 text-center">

        <thead>
          <tr className="text-2xl">
            <th>Index</th>
            <th>Name</th>
            <th>email</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className='text-lg'>
          {
            users.map((user, index) => <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {
                  user.role === 'admin' ?
                    <button disabled className='btn btn-outline text-black'>Admin</button> :
                    <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-outline btn-accent'>make admin</button>
                }
              </td>
              <td>
                <button onClick={() => handleRemove(user._id)} className='btn btn-outline btn-error'>delete user</button>
              </td>
            </tr>)
          }
        </tbody>

      </table>
    </div>
  );
};

export default AllUsers;