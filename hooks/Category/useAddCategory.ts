import { useLoading } from './../../context/loading/index';
import { createCategoryApi } from "@/api/categories";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from '@/utils/toast';

const useAddCategory = () => {
  const router = useRouter();
  const { setLoading } = useLoading()

  return useMutation(createCategoryApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      router.push("/admin/categories")
      toast("Added Category successfully", `success`)
    },
    onError: () => {
      toast("Failed to add Category", `error`)
    },
    onSettled: () => {
      setLoading(false)
    }
  })
};

export default useAddCategory;