import { updateProductApi } from "@/api/products";
import { useLoading } from "@/context/loading";
import { toast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useUpdateProduct = () => {
  const router = useRouter();
  const { setLoading } = useLoading()
  return useMutation(updateProductApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      router.push("/admin/products")
      toast("Update Product successfully", `success`)
    },
    onError: () => {
      toast("Failed to update Product", `error`)
    },
    onSettled: () => {
      setLoading(false)
    }
  })
};

export default useUpdateProduct;