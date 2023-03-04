/* eslint-disable @typescript-eslint/no-explicit-any */
import { getUserCart } from "@/api/carts";
import { useLoading } from "@/context/loading";
import { toast } from "@/utils/toast";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useUserCart = () => {
    const { setLoading } = useLoading();
    const result = useQuery(['user_cart'], () => getUserCart(), {
        select: (data) => data.data,
        onError: (err: any) => {
            toast(err.error, "error")
        },
    })

    useEffect(() => {
        setLoading(result.isFetching)
    }, [result.isFetching])

    return result;
};

export default useUserCart