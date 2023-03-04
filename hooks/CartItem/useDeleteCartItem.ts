import { deleteCartItemApi } from "@/api/cartItems";
import { useLoading } from "@/context/loading";
import { useModal } from "@/context/modal";
import { toast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import useUserCart from "../Cart/useUserCart";

const useDeleteCartItem = () => {
  const { setLoading } = useLoading()
  const { hideModal } = useModal()

  const { refetch } = useUserCart()

  return useMutation(deleteCartItemApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      toast("Delete CartItem successfully", `success`)
      refetch()
    },
    onError: () => {
      toast("Failed to delete CartItem", `error`)
    },
    onSettled: () => {
      hideModal()
      setLoading(false)
    }
  })
};

export default useDeleteCartItem;