import { updateCartItemApi } from "@/api/cartItems";
import { useLoading } from "@/context/loading";
import { toast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import useCartItems from "./useCartItems";

const useUpdateCartItem = () => {
  const { refetch } = useCartItems()
  const { setLoading } = useLoading()
  return useMutation(updateCartItemApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      toast("Update Cart Item successfully", `success`)
      refetch()
    },
    onError: () => {
      toast("Failed to update Cart Item", `error`)
    },
    onSettled: () => {
      setLoading(false)
    }
  })
};

export default useUpdateCartItem;