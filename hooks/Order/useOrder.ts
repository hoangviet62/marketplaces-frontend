/* eslint-disable @typescript-eslint/no-explicit-any */
import { getOrderById } from "@/api/orders";
import { useLoading } from "@/context/loading";
import { toast } from "@/utils/toast";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useOrder = (id: any) => {
    const { setLoading } = useLoading();
    const result = useQuery(['carts', id], () => getOrderById(id), {
        select: (data) => data.data,
        enabled: Boolean(id),
        onError: (err: any) => {
            toast(err.error, "error")
        },
    })

    useEffect(() => {
        setLoading(result.isFetching)
    }, [result.isFetching])

    return result;
};

export default useOrder