import useClasses from "../../Hooks/useClasses";
import ClassRow from "./ClassRow";


const Classes = () => {

  const [allClasses, loading] = useClasses()
  if (loading) {
    return <div className="w-full flex justify-center items-center h-[550px]">
      <span className="loading loading-spinner text-accent w-14"></span>
    </div>
  }
  return (
    <div className="overflow-x-auto ">
      <p className="text-4xl font-bold p-8 border border-teal-300 text-center rounded-full shadow-xl bg-amber-600/20 font-serif uppercase mt-7 mb-14">all classes are down below</p>
      <table className="table border mb-14">

        <thead>
          <tr className="text-2xl">
            <th>Image</th>
            <th>Name</th>
            <th>Instructor Name</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            allClasses.map(singleclass => <ClassRow key={singleclass._id} singleclass={singleclass}></ClassRow>)
          }
        </tbody>

      </table>
    </div>
  );
};


export default Classes;