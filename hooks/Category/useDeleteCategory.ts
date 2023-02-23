import { deleteCategoryApi } from "@/api/categories";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteCategory = (id) => {
    const queryClient = useQueryClient()

    return useMutation(() => deleteCategoryApi(id), {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] })
            // toast.success(`Added successfully`)
        }
    })
};

export default useDeleteCategory;