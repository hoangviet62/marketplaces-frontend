import { useLoading } from '../../context/loading/index';
import { createCartItemApi } from "@/api/cartItems";
import { useMutation } from "@tanstack/react-query";
import { toast } from '@/utils/toast';
import useUserCart from '../Cart/useUserCart';

const useAddCartItem = () => {
  const { refetch } = useUserCart()
  const { setLoading } = useLoading()

  return useMutation(createCartItemApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      toast("Added CartItem successfully", `success`)
      refetch()
    },
    onError: () => {
      toast("Failed to add CartItem", `error`)
    },
    onSettled: () => {
      setLoading(false)
    }
  })
};

export default useAddCartItem;