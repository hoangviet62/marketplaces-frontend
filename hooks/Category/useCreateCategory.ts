import { useLoading } from '../../context/loading/index';
import { createCategoryApi } from "@/api/categories";
import { useMutation } from "@tanstack/react-query";
import { toast } from '@/utils/toast';
import useCategories from "./useCategories";

const useCreateCategory = () => {
  const { setLoading } = useLoading()
  const { refetch } = useCategories()

  return useMutation(createCategoryApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      toast("Added Category successfully", `success`)
      refetch()
    },
    onError: () => {
      toast("Failed to add Category", `error`)
    },
    onSettled: () => {
      setLoading(false)
    }
  })
};

export default useCreateCategory;