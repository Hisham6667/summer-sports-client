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
    <div className="w-full">
      <p className="text-4xl font-bold p-8 border border-teal-300 text-center rounded-full shadow-xl bg-amber-600/20 font-serif uppercase mt-7 mb-20">Our multi talented {instructors.length} best Instructors</p>
      <div className="grid grid-cols-2 gap-10 p-10 mb-20" style={{backgroundImage: "url(https://i.ibb.co/S0zVKdT/instructors-bg.jpg)"}}>
        {
          instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
        }
      </div>
    </div>
  );
};

export default Instructors;