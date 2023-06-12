import useSelectedClass from "../../../Hooks/useSelectedClass";


const SelectedClasses = () => {
  const [selectedClasses, refetch] = useSelectedClass();

  return (
    <div>
      {selectedClasses.length}
    </div>
  );
};

export default SelectedClasses;