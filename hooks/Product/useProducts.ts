import { getAllProductsApi } from "@/api/products";
import { toast } from "@/utils/toast";
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
    return useQuery(['Products'], getAllProductsApi, {
        select: (data) => data.data,
        onError: (err) => {
            toast(err.error, "error")
        },
    })
};

export default useProducts