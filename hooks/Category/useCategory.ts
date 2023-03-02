/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCategoryById } from "@/api/categories";
import { useLoading } from "@/context/loading";
import { toast } from "@/utils/toast";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useCategory = (id: any) => {
    const { setLoading } = useLoading();
    const result = useQuery(['categories', id], () => getCategoryById(id), {
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

export default useCategory