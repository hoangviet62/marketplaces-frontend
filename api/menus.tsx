import axiosClient from './base'

const endpoint = 'menus'

export async function getAllMenusApi(): Promise<any> {
  return axiosClient.get(`${process.env.apiUrl}/${endpoint}`)
}