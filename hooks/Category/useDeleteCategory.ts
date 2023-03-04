import { deleteCategoryApi } from "@/api/categories";
import { useLoading } from "@/context/loading";
import { useModal } from "@/context/modal";
import { toast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import useCategories from "./useCategories";

const useDeleteCategory = () => {
  const { setLoading } = useLoading()
  const { hideModal } = useModal()
  const { refetch } = useCategories()

  return useMutation(deleteCategoryApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      toast("Delete category successfully", `success`)
      refetch()
    },
    onError: () => {
      toast("Failed to delete category", `error`)
    },
    onSettled: () => {
      hideModal()
      setLoading(false)
    }
  })
};

export default useDeleteCategory;