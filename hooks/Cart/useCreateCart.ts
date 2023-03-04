import { useLoading } from './../../context/loading/index';
import { createCartApi } from "@/api/carts";
import { useMutation } from "@tanstack/react-query";
import { toast } from '@/utils/toast';
import useUserCart from './useUserCart';

const useAddCart = () => {
  const { refetch } = useUserCart()
  const { setLoading } = useLoading()

  return useMutation(createCartApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      refetch()
    },
    onError: () => {
      toast("Failed to add Cart", `error`)
    },
    onSettled: () => {
      setLoading(false)
    }
  })
};

export default useAddCart;