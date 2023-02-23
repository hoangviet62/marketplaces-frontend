import { updateCategoryApi } from "@/api/categories";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteCategory = (data, id) => {
    const queryClient = useQueryClient()

    return useMutation(() => updateCategoryApi(data, id), {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] })
            // toast.success(`Added successfully`)
        }
    })
};

export default useDeleteCategory;