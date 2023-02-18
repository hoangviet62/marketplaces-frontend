import { configureAuth } from 'react-query-auth';
import { login, register, getUserProfile } from '@/api/auth'

import { User, RegisterPayload, LoginPayload } from '@/interfaces/auth'

import { storage } from '@/utils/cookie'

export function handleUserResponse(resp) {
  const {
    data: { token, user },
  } = resp
  storage.setToken(token)
  return token
}

async function userFn() {
  // let user = null;
  // if (storage.getToken()) {
  //   const data = await getUserProfile();
  //   user = data;
  // }
  return storage.getToken()
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
