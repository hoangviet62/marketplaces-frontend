import { useEffect } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  createCategoryApi,
  deleteCategoryApi,
  getAllCategoriesApi,
  updateCategoryApi,
} from '@/api/categories'
// import { useLoading } from '../context/LoadingContext';
// import { useModal } from '../context/ModalContext';
// import { useToast } from '../context/ToastContext';

function useCategories() {
  const queryClient = useQueryClient()
  //   const { error, success } = useToast();
  //   const { setLoading } = useLoading();
  //   const { hideModal } = useModal();

  const { isLoading, data: categories } = useQuery(
    ['categories'],
    getAllCategoriesApi,
    {
      select: (data) => data.items,
      onError: (err) => {
        // error(err);
      },
    }
  )

  const { mutate: createCategory, isLoading: creating } = useMutation(
    createCategoryApi,
    {
      onSuccess(data) {
        // success('Tạo thành công  category');
        queryClient.invalidateQueries('categories')
      },

      onError: (err) => {
        // error(err);
      },
    }
  )

  const { mutate: updateCategory, isLoading: updating } = useMutation(
    updateCategoryApi,
    {
      onSuccess(data) {
        // success('Update thành công  category');
        queryClient.invalidateQueries('categories')
      },

      onError: (err) => {
        // error(err);
      },
    }
  )

  const { mutate: deleteCategory, isLoading: deleting } = useMutation(
    deleteCategoryApi,
    {
      onSuccess(data) {
        // hideModal();
        // success('Xóa thành công category');
        queryClient.invalidateQueries('-categories')
      },

      onError: (err) => {
        // error(err);
      },
    }
  )

  //   useEffect(() => {
  //     setLoading(isLoading);
  //   }, [isLoading]);

  //   useEffect(() => {
  //     setLoading(creating);
  //   }, [creating]);

  //   useEffect(() => {
  //     setLoading(deleting);
  //   }, [deleting]);

  //   useEffect(() => {
  //     setLoading(updating);
  //   }, [updating]);

  return {
    categories,
    createCategory,
    deleteCategory,
    updateCategory,
  }
}

export default useCategories
