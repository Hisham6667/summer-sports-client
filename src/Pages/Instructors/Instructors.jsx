import useInstructor from "../../Hooks/useInstructor";


const Instructors = () => {

  const [instructors] = useInstructor();

  return (
    <div>
      <p className="">Our best Instructors</p>
      {
        instructors.map(instructor => {
          
        })
      }
    </div>
  );
};

export default Instructors;