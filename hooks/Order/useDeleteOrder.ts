import { deleteOrderApi } from "@/api/orders";
import { useLoading } from "@/context/loading";
import { useModal } from "@/context/modal";
import { toast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import useOrders from "./useOrders";

const useDeleteOrder = () => {
  const { setLoading } = useLoading()
  const { hideModal } = useModal()

  const { refetch } = useOrders()

  return useMutation(deleteOrderApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      toast("Delete order successfully", `success`)
      refetch()
    },
    onError: () => {
      toast("Failed to delete order", `error`)
    },
    onSettled: () => {
      hideModal()
      setLoading(false)
    }
  })
};

export default useDeleteOrder;