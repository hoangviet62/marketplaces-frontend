import { updateCategoryApi } from "@/api/categories";
import { useLoading } from "@/context/loading";
import { toast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useUpdateCategory = () => {
  const router = useRouter();
  const { setLoading } = useLoading()
  return useMutation(updateCategoryApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      router.push("/admin/categories")
      toast("Update Category successfully", `success`)
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