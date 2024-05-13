import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import roleMock from './test'

export async function setupProdMockServer() {
  const mockModules = [...roleMock ]
  createProdMockServer(mockModules)
}