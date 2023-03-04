import { updateProductApi } from "@/api/products";
import { useLoading } from "@/context/loading";
import { toast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import useProducts from "./useProducts";

const useUpdateProduct = () => {
  const { refetch } = useProducts()
  const { setLoading } = useLoading()
  return useMutation(updateProductApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      toast("Update product successfully", `success`)
      refetch()
    },
    onError: () => {
      toast("Failed to update product", `error`)
    },
    onSettled: () => {
      setLoading(false)
    }
  })
};

export default useUpdateProduct;