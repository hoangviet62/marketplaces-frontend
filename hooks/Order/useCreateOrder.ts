import { useLoading } from '../../context/loading/index';
import { createOrderApi } from "@/api/orders";
import { useMutation } from "@tanstack/react-query";
import { toast } from '@/utils/toast';
import useOrders from './useOrders';

const useAddOrder = () => {
  const { refetch } = useOrders()
  const { setLoading } = useLoading()

  return useMutation(createOrderApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      refetch()
    },
    onError: () => {
      toast("Failed to add Order", `error`)
    },
    onSettled: () => {
      setLoading(false)
    }
  })
};

export default useAddOrder;