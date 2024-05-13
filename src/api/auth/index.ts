import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import { LoginData, LoginResult } from './types'

// 登录
export function loginApi(data: LoginData): AxiosPromise<LoginResult> {
  return request({
    url: '/api/login',
    method: 'post',
    data
  })
}