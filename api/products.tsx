import QueryStringParams from '@/utils/query-string-params'
import axiosClient from './base'

const endpoint = 'products'

export async function createProductApi(data: any): Promise<any> {
  return axiosClient.post(`${process.env.apiUrl}/${endpoint}`, data)
}

export async function updateProductApi(params: any): Promise<any> {
  const { data, id } = params
  return axiosClient.patch(`${process.env.apiUrl}/${endpoint}/${id}`, data)
}

export async function deleteProductApi(id: string): Promise<any> {
  return axiosClient.delete(`${process.env.apiUrl}/${endpoint}/${id}`)
}

export async function getAllProductsApi(payload: any): Promise<any> {
  return axiosClient.get(`${process.env.apiUrl}/${QueryStringParams(payload, endpoint)}`)
}

export async function getProductById(id: number): Promise<any> {
  return axiosClient.get(`${process.env.apiUrl}/${endpoint}/${id}`)
}
