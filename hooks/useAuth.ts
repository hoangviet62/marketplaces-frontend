import { configureAuth } from 'react-query-auth';
import { login, register, getUserProfile } from '@/api/auth'

import { RegisterPayload, LoginPayload } from '@/interfaces/auth'

import { storage } from '@/utils/cookie'

export function handleUserResponse(resp) {
  const {
    data: { auth_token },
  } = resp
  storage.setToken(auth_token)
  return auth_token
}

async function userFn() {
  let user = null;
  if (storage.getToken()) {
    const data = await getUserProfile();
    user = data;
  }

  return user
}

async function loginFn(data: LoginPayload) {
  const response = await login(data)
  const token = handleUserResponse(response)
  return token
}

async function registerFn(data: RegisterPayload) {
  const response = await register(data)
  const token = handleUserResponse(response)
  return token
}

async function logoutFn() {
  storage.clearToken()
}

const authConfig = {
  userFn,
  loginFn,
  registerFn,
  logoutFn,
}

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } = configureAuth(authConfig)
