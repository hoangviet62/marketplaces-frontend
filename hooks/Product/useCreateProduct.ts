import { useLoading } from './../../context/loading/index';
import { createProductApi } from "@/api/products";
import { useMutation } from "@tanstack/react-query";
import { toast } from '@/utils/toast';
import useProducts from './useProducts';

const useAddProduct = () => {
  const { refetch } = useProducts()
  const { setLoading } = useLoading()

  return useMutation(createProductApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      toast("Added Product successfully", `success`)
      refetch()
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