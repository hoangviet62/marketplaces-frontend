import { updateBannerApi } from "@/api/banners";
import { useLoading } from "@/context/loading";
import { toast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import useBanners from "./useBanners";

const useUpdateBanner = () => {
  const { setLoading } = useLoading()
  const { refetch } = useBanners()

  return useMutation(updateBannerApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      toast("Update banner successfully", `success`)
      refetch()
    },
    onError: () => {
      toast("Failed to update banner", `error`)
    },
    onSettled: () => {
      setLoading(false)
    }
  })
};

export default useUpdateBanner;