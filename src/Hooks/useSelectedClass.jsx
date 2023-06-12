import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClass = () => {

  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: selectedClasses = [], refetch } = useQuery({
    queryKey: ['selectedClasses', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/selectedclasses?email=${user?.email}`)
      return res.data
    }
  })

  return [selectedClasses, refetch]
};

export default useSelectedClass;