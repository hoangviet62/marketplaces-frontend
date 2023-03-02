/* eslint-disable @typescript-eslint/no-explicit-any */
import { getProductById } from "@/api/products";
import { useLoading } from "@/context/loading";
import { toast } from "@/utils/toast";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useProduct = (id: any) => {
    const { setLoading } = useLoading();
    const result = useQuery(['products', id], () => getProductById(id), {
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

export default useProduct