/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllProductsApi } from "@/api/products";
import { useLoading } from "@/context/loading";
import { toast } from "@/utils/toast";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useProducts = () => {
    const { setLoading } = useLoading()
    const result = useQuery(['Products'], getAllProductsApi, {
        select: (data) => data.data,
        onError: (err: any) => {
            toast(err.error, "error")
        },
    })

    useEffect(() => {
        setLoading(result.isFetching)
    }, [result.isFetching])
    
    return result
};

export default useProducts