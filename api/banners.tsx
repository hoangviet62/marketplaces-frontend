/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryStringParams from '@/utils/query-string-params'
import axiosClient from './base'

const endpoint = 'banners'

export async function createBannerApi(data: any): Promise<any> {
  return axiosClient.post(`${process.env.apiUrl}/${endpoint}`, data)
}

export async function updateBannerApi(params: any): Promise<any> {
  const { data, id } = params
  return axiosClient.patch(`${process.env.apiUrl}/${endpoint}/${id}`, data)
}

export async function deleteBannerApi(id: string): Promise<any> {
  return axiosClient.delete(`${process.env.apiUrl}/${endpoint}/${id}`)
}

export async function getAllBannersApi(payload: any): Promise<any> {
  return axiosClient.get(`${process.env.apiUrl}/${QueryStringParams(payload, endpoint)}`)
}

export async function getBannerById(id: number): Promise<any> {
  return axiosClient.get(`${process.env.apiUrl}/${endpoint}/${id}`)
}
