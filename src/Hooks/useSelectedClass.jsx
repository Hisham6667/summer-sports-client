import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSelectedClass = () => {

  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const {  refetch, data: selectedClasses = [] } = useQuery({
    queryKey: ['selectedClasses', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`selectedclasses?email=${user?.email}`)
      return res.data;
    }
  })

  return [selectedClasses, refetch]
};

export default useSelectedClass;