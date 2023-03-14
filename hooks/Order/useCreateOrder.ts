import { useLoading } from '../../context/loading/index';
import { createOrderApi } from "@/api/orders";
import { useMutation } from "@tanstack/react-query";
import { toast } from '@/utils/toast';
import useUserCart from '../Cart/useUserCart';
import { useUIContext } from '@/context/ui';
import useOrders from './useOrders';

const useAddOrder = () => {
  const { refetch } = useUserCart()
  const { refetch: refetchOrder } = useOrders()
  const { setLoading } = useLoading()
  const { setShowCart } = useUIContext()

  return useMutation(createOrderApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      toast("Created Order successfully", `success`)
      refetch()
      refetchOrder()
      setShowCart(false)
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