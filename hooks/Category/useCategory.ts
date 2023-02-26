import { getCategoryById } from "@/api/categories";
import { toast } from "@/utils/toast";
import { useQuery } from "@tanstack/react-query";

const useCategory = (id) => {
    return useQuery(['categories', id], () => getCategoryById(id), {
        select: (data) => data.data,
        enabled: Boolean(id),
        onError: (err) => {
            toast(err.error, "error")
        },
    })
};

export default useCategory