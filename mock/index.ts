import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/dev-api/api/login',
    method: 'post',
    response: (req) => {
      return {
        code: 200,
        message: 'ok',
        data: { test :'121' }
      }
    }
  }
] as MockMethod[];