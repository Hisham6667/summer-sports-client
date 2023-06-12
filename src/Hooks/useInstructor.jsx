import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
  const {data: instructors = [], isLoading: loading, refetch} = useQuery({
    queryKey: ['instructors'],
    queryFn: async() =>{
      const res = await fetch('https://summer-sports-server.vercel.app/instructors');
      return res.json();
    }
  })
  return [instructors, loading, refetch]
};

export default useInstructor;