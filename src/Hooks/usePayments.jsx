import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const usePayments = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ['payments', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`payments?email=${user?.email}`)
      return res.data;
    }
  })

  return [payments]
};

export default usePayments;