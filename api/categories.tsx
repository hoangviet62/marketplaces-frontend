/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from './base'

const endpoint = '/categories'

export async function createCategoryApi(data): Promise<any> {
  return axiosClient.post(`${process.env.NEXT_PUBLIC_APP_API_URL}/${endpoint}`, data)
}

export async function updateCategoryApi(data, id): Promise<any> {
  return axiosClient.put(`${process.env.NEXT_PUBLIC_APP_API_URL}/${endpoint}/${id}`, data)
}

export async function deleteCategoryApi(id: string): Promise<any> {
  return axiosClient.delete(`${process.env.NEXT_PUBLIC_APP_API_URL}/${endpoint}/${id}`)
}

export async function getAllCategoriesApi(): Promise<any> {
  console.log(process.env.NEXT_PUBLIC_APP_API_URL);
  return axiosClient.get(`${process.env.NEXT_PUBLIC_APP_API_URL}/${endpoint}`)
}
