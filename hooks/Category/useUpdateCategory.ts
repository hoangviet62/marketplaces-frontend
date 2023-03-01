import { updateCategoryApi } from "@/api/categories";
import { useLoading } from "@/context/loading";
import { toast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import useCategories from "./useCategories";

const useUpdateCategory = () => {
  const router = useRouter();
  const { setLoading } = useLoading()
  const { refetch } = useCategories()

  return useMutation(updateCategoryApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      toast("Update Category successfully", `success`)
      refetch()
    },
    onError: () => {
      toast("Failed to update Category", `error`)
    },
    onSettled: () => {
      setLoading(false)
    }
  })
};

export default useUpdateCategory;