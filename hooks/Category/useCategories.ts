import { getAllCategoriesApi } from "@/api/categories";
import { toast } from "@/utils/toast";
import { useQuery } from "@tanstack/react-query";

const useCategories = () => {
    return useQuery(['categories'], getAllCategoriesApi, {
        select: (data) => data.data,
        onError: (err) => {
            toast(err.error, "error")
        },
    })
};

export default useCategories