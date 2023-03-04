/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCartItemById } from "@/api/cartItems";
import { useLoading } from "@/context/loading";
import { toast } from "@/utils/toast";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useCartItem = (id: any) => {
    const { setLoading } = useLoading();
    const result = useQuery(['cartItems', id], () => getCartItemById(id), {
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

export default useCartItem