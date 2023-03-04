/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryStringParams from '@/utils/query-string-params'
import axiosClient from './base'

const endpoint = 'carts'

export async function createCartApi(): Promise<any> {
  return axiosClient.post(`${process.env.apiUrl}/${endpoint}`)
}

export async function updateCartApi(params: any): Promise<any> {
  const { data, id } = params
  return axiosClient.patch(`${process.env.apiUrl}/${endpoint}/${id}`, data)
}

export async function deleteCartApi(id: string): Promise<any> {
  return axiosClient.delete(`${process.env.apiUrl}/${endpoint}/${id}`)
}

export async function getAllCartsApi(payload: any): Promise<any> {
  return axiosClient.get(
    `${process.env.apiUrl}/${QueryStringParams(payload, endpoint)}`
  )
}

export async function getCartById(id: number): Promise<any> {
  return axiosClient.get(`${process.env.apiUrl}/${endpoint}/${id}`)
}

export async function getUserCart(): Promise<any> {
  return axiosClient.get(
    `${process.env.apiUrl}/${endpoint}/get_user_cart`
  )
}

