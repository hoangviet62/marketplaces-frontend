import { getAllCategoriesApi } from "@/api/categories";
import { useQuery } from "@tanstack/react-query";

const useCategories = () => {
    return useQuery(['categories'], getAllCategoriesApi, {
        select: (data) => data.data
    })
};

export default useCategories