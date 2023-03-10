/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllOrdersApi } from "@/api/orders";
import { useLoading } from "@/context/loading";
import { toast } from "@/utils/toast";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useOrders = (payload?: any) => {
    const { setLoading } = useLoading()
    const result = useQuery(['carts'], () => getAllOrdersApi(payload), {
        select: (data) => ({ data: data.data, meta: data.pagination }),
        onError: (err: any) => {
            toast(err.error, "error")
        },
        enabled: false
    })

    useEffect(() => {
        setLoading(result.isFetching)
    }, [result.isFetching])
    
    return result
};

export default useOrders