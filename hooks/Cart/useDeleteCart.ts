import { deleteCartApi } from "@/api/carts";
import { useLoading } from "@/context/loading";
import { useModal } from "@/context/modal";
import { toast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import useCarts from "./useCarts";

const useDeleteCart = () => {
  const { setLoading } = useLoading()
  const { hideModal } = useModal()

  const { refetch } = useCarts()

  return useMutation(deleteCartApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      toast("Delete cart successfully", `success`)
      refetch()
    },
    onError: () => {
      toast("Failed to delete cart", `error`)
    },
    onSettled: () => {
      hideModal()
      setLoading(false)
    }
  })
};

export default useDeleteCart;