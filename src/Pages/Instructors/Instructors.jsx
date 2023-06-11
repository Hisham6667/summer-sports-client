import useInstructor from "../../Hooks/useInstructor";
import InstructorCard from "./InstructorCard";


const Instructors = () => {

  const [instructors, loading] = useInstructor();

  if (loading) {
    return <div className="w-full flex justify-center items-center h-[550px]">
      <span className="loading loading-spinner text-accent w-14"></span>
    </div>
  }
  
  return (
    <div>
      <p className="text-4xl font-bold p-8 border border-teal-300 text-center rounded-full shadow-xl bg-amber-600/20 font-serif uppercase mb-10">Our multi talented {instructors.length} best Instructors</p>
      {
        instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
      }
    </div>
  );
};

export default Instructors;