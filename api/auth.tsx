import axiosClient from './base'
import { AuthResponse, LoginPayload, RegisterPayload } from '@/interfaces/auth'

export async function getUserProfile() {
  return
}

export async function login(data: LoginPayload): Promise<AuthResponse> {
  return await axiosClient.post(
    `${process.env.NEXT_PUBLIC_APP_API_URL}/auth/sign_in`,
    JSON.stringify(data)
  )
}

export async function register(data: RegisterPayload): Promise<AuthResponse> {
  return await axiosClient.post(
    `${process.env.NEXT_PUBLIC_APP_API_URL}/auth/register`,
    JSON.stringify(data)
  )
}
