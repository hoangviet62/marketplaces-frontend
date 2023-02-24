/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from './base'

const endpoint = 'categories'

export async function createCategoryApi(data): Promise<any> {
  return axiosClient.post(`${process.env.apiUrl}/${endpoint}`, data)
}

export async function updateCategoryApi(params): Promise<any> {
  const { data, id } = params
  return axiosClient.patch(`${process.env.apiUrl}/${endpoint}/${id}`, data)
}

export async function deleteCategoryApi(id: string): Promise<any> {
  return axiosClient.delete(`${process.env.apiUrl}/${endpoint}/${id}`)
}

export async function getAllCategoriesApi(): Promise<any> {
  return axiosClient.get(`${process.env.apiUrl}/${endpoint}?sort=desc`)
}

export async function getCategoryById(id): Promise<any> {
  return axiosClient.get(`${process.env.apiUrl}/${endpoint}/${id}`)
}
