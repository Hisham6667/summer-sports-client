import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  const {data: allClasses = [], isLoading: loading, refetch} = useQuery({
    queryKey: ['allClasses'],
    queryFn: async() =>{
      const res = await fetch('https://summer-sports-server.vercel.app/allclasses');
      return res.json();
    }
  })
  return [allClasses, loading, refetch]
};

export default useClasses;