import { deleteBannerApi } from "@/api/banners";
import { useLoading } from "@/context/loading";
import { useModal } from "@/context/modal";
import { toast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import useBanners from "./useBanners";

const useDeleteBanner = () => {
  const { setLoading } = useLoading()
  const { hideModal } = useModal()
  const { refetch } = useBanners()

  return useMutation(deleteBannerApi, {
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      toast("Delete banner successfully", `success`)
      refetch()
    },
    onError: () => {
      toast("Failed to delete banner", `error`)
    },
    onSettled: () => {
      hideModal()
      setLoading(false)
    }
  })
};

export default useDeleteBanner;