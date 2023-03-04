/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryStringParams from '@/utils/query-string-params'
import axiosClient from './base'

const endpoint = 'cart_items'

export async function createCartItemApi(data: any): Promise<any> {
  return axiosClient.post(`${process.env.apiUrl}/${endpoint}`, data)
}

export async function updateCartItemApi(params: any): Promise<any> {
  const { data, id } = params
  return axiosClient.patch(`${process.env.apiUrl}/${endpoint}/${id}`, data)
}

export async function deleteCartItemApi(id: string): Promise<any> {
  return axiosClient.delete(`${process.env.apiUrl}/${endpoint}/${id}`)
}

export async function getAllCartItemsApi(payload: any): Promise<any> {
  return axiosClient.get(
    `${process.env.apiUrl}/${QueryStringParams(payload, endpoint)}`
  )
}

export async function getCartItemById(id: number): Promise<any> {
  return axiosClient.get(`${process.env.apiUrl}/${endpoint}/${id}`)
}
