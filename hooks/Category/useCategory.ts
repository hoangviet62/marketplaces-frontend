import { getCategoryById } from "@/api/categories";
import { useQuery } from "@tanstack/react-query";

const useCategory = (id) => {
    return useQuery(['categories', id], () => getCategoryById(id), {
        select: (data) => data.data
    })
};

export default useCategory