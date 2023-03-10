/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryStringParams from '@/utils/query-string-params'
import axiosClient from './base'

const endpoint = 'orders'

export async function createOrderApi(): Promise<any> {
  return axiosClient.post(`${process.env.apiUrl}/${endpoint}`)
}

export async function updateOrderApi(params: any): Promise<any> {
  const { data, id } = params
  return axiosClient.patch(`${process.env.apiUrl}/${endpoint}/${id}`, data)
}

export async function deleteOrderApi(id: string): Promise<any> {
  return axiosClient.delete(`${process.env.apiUrl}/${endpoint}/${id}`)
}

export async function getAllOrdersApi(payload: any): Promise<any> {
  return axiosClient.get(
    `${process.env.apiUrl}/${QueryStringParams(payload, endpoint)}`
  )
}

export async function getOrderById(id: number): Promise<any> {
  return axiosClient.get(`${process.env.apiUrl}/${endpoint}/${id}`)
}
