import { useLoading } from '../../context/loading/index';
import { createBannerApi } from "@/api/banners";
import { useMutation } from "@tanstack/react-query";
import { toast } from '@/utils/toast';
import useBanners from "./useBanners";

const useCreateBanner = () => {
  const { setLoading } = useLoading()
  const { refetch } = useBanners()

  return useMutation(createBannerApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      toast("Added banner successfully", `success`)
      refetch()
    },
    onError: () => {
      toast("Failed to add banner", `error`)
    },
    onSettled: () => {
      setLoading(false)
    }
  })
};

export default useCreateBanner;