import { getProductById } from "@/api/products";
import { toast } from "@/utils/toast";
import { useQuery } from "@tanstack/react-query";

const useProduct = (id) => {
    return useQuery(['products', id], () => getProductById(id), {
        select: (data) => data.data,
        enabled: Boolean(id),
        onError: (err) => {
            toast(err.error, "error")
        },
    })
};

export default useProduct