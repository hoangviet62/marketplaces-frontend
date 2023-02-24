export interface AuthResponse {
  status: string
  auth_token: string
  error_message: string
}

export interface LoginPayload {
  username: string
  password: string
}

export interface RegisterPayload {
  username: string
  password: string
  email: string
  mobileNumber: string
  confirmPassword?: string
}

export interface User {
  id: string
  email: string
  username: string
  role: string
  status: string
  mobile: string
}