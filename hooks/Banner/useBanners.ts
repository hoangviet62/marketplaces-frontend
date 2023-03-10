/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllBannersApi } from "@/api/banners";
import { useLoading } from "@/context/loading";
import { toast } from "@/utils/toast";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useBanners = (payload?: any) => {
  const { setLoading } = useLoading();
  const result = useQuery(['banners'], () => getAllBannersApi(payload), {
    select: (data) => ({ data: data.data, meta: data.pagination }),
    onError: (err: any) => {
        toast(err.error, "error")
    },
  })

  useEffect(() => {
    setLoading(result.isFetching)
  }, [result.isFetching])

  return result;
};

export default useBanners