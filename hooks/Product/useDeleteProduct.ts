import { deleteProductApi } from "@/api/products";
import { useLoading } from "@/context/loading";
import { useModal } from "@/context/modal";
import { toast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import useProducts from "./useProducts";

const useDeleteProduct = () => {
  const { setLoading } = useLoading()
  const { hideModal } = useModal()

  const { refetch } = useProducts()

  return useMutation(deleteProductApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      toast("Delete product successfully", `success`)
      refetch()
    },
    onError: () => {
      toast("Failed to delete product", `error`)
    },
    onSettled: () => {
      hideModal()
      setLoading(false)
    }
  })
};

export default useDeleteProduct;