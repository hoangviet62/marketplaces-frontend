import { deleteCategoryApi } from "@/api/categories";
import { useLoading } from "@/context/loading";
import { useModal } from "@/context/modal";
import { toast } from "@/utils/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteCategory = () => {
  const { setLoading } = useLoading()
  const { hideModal } = useModal()
  const queryClient = useQueryClient()


  return useMutation(deleteCategoryApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      toast("Delete Category successfully", `success`)
      queryClient.invalidateQueries(['categories'])
    },
    onError: () => {
      toast("Failed to delete Category", `error`)
    },
    onSettled: () => {
      hideModal()
      setLoading(false)
    }
  })
};

export default useDeleteCategory;