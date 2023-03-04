import { updateCategoryApi } from "@/api/categories";
import { useLoading } from "@/context/loading";
import { toast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import useCategories from "./useCategories";

const useUpdateCategory = () => {
  const { setLoading } = useLoading()
  const { refetch } = useCategories()

  return useMutation(updateCategoryApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      toast("Update category successfully", `success`)
      refetch()
    },
    onError: () => {
      toast("Failed to update category", `error`)
    },
    onSettled: () => {
      setLoading(false)
    }
  })
};

export default useUpdateCategory;