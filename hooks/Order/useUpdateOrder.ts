import { updateOrderApi } from "@/api/orders";
import { useLoading } from "@/context/loading";
import { toast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import useOrders from "./useOrders";

const useUpdateOrder = () => {
  const { refetch } = useOrders()
  const { setLoading } = useLoading()
  return useMutation(updateOrderApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      toast("Update order successfully", `success`)
      refetch()
    },
    onError: () => {
      toast("Failed to update order", `error`)
    },
    onSettled: () => {
      setLoading(false)
    }
  })
};

export default useUpdateOrder;