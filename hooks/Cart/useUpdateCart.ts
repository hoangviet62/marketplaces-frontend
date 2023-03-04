import { updateCartApi } from "@/api/carts";
import { useLoading } from "@/context/loading";
import { toast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import useCarts from "./useCarts";

const useUpdateCart = () => {
  const { refetch } = useCarts()
  const { setLoading } = useLoading()
  return useMutation(updateCartApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      toast("Update cart successfully", `success`)
      refetch()
    },
    onError: () => {
      toast("Failed to update cart", `error`)
    },
    onSettled: () => {
      setLoading(false)
    }
  })
};

export default useUpdateCart;