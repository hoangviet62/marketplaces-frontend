export interface AuthResponse {
  Status: string
  AuthToken: string
  ErrorMessage: string
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
}