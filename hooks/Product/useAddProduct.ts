import { useLoading } from './../../context/loading/index';
import { createProductApi } from "@/api/products";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from '@/utils/toast';

const useAddProduct = () => {
  const router = useRouter();
  const { setLoading } = useLoading()

  return useMutation(createProductApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      router.push("/admin/products")
      toast("Added Product successfully", `success`)
    },
    onError: () => {
      toast("Failed to add Product", `error`)
    },
    onSettled: () => {
      setLoading(false)
    }
  })
};

export default useAddProduct;