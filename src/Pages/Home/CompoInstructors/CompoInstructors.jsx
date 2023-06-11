import useInstructor from "../../../Hooks/useInstructor";
import CompoInstructorCard from "./CompoInstructorCard";


const CompoInstructors = () => {

  const [instructors, loading] = useInstructor();

  if (loading) {
    return <div className="w-full flex justify-center items-center h-[550px]">
      <span className="loading loading-spinner text-accent w-14"></span>
    </div>
  }

  return (
    <div className="mb-20">

      <div className="hero image-full" style={{ backgroundImage: "url(https://i.ibb.co/S0zVKdT/instructors-bg.jpg)" }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content flex flex-col">
          <p className="text-white uppercase text-4xl font-semibold my-5">Our best Instructors</p>
          <div className="grid grid-cols-2 gap-10 pb-10 px-10">
            {
              instructors.map(instructor => <CompoInstructorCard key={instructor._id} instructor={instructor}></CompoInstructorCard>)
            }
          </div>
        </div>

      </div>
    </div>
  );
};

export default CompoInstructors;