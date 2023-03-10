import axiosClient from './base'
import { AuthResponse, LoginPayload, User } from '@/interfaces/auth'

export async function getUserProfile(): Promise<User>{
  return await axiosClient.get(`${process.env.apiUrl}/users/me`)
}

export async function login(data: LoginPayload): Promise<AuthResponse> {
  return await axiosClient.post(
    `${process.env.apiUrl}/auth/sign_in`,
    JSON.stringify(data)
  )
}

export async function register(data: any): Promise<AuthResponse> {
  return await axiosClient.post(
    `${process.env.apiUrl}/users/register`,
    JSON.stringify(data)
  )
}
