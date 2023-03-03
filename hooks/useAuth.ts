/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureAuth } from 'react-query-auth';
import { login, register, getUserProfile } from '@/api/auth'

import { RegisterPayload, LoginPayload } from '@/interfaces/auth'

import { storage } from '@/utils/cookie'

export function handleUserResponse(resp: any) {
  const {
    data: { authToken }
  } = resp
  storage.setToken(authToken)
  return authToken
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
  handleUserResponse(response)
  try {
    const user = await getUserProfile();
    return user;
  } catch {
    throw new Error("abc")
  }
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

const { useUser, useLogin, useRegister, useLogout, AuthLoader } = configureAuth(authConfig)

export { useUser, useLogin, useRegister, useLogout, AuthLoader, userFn }
