import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { AccountsWithRoleResponse, AccountWithRoles } from '../typing/account'
import WebClient from './webClient'

const accountConfig = apiConfig.account

export const accountService = {
  getAccountsWithRoles(request: Request): Promise<AccountsWithRoleResponse> {
    return WebClient.get<AccountsWithRoleResponse>({
      baseUrl: accountConfig.baseUrl,
      path: accountConfig.accounts,
      headers: request.headers as Record<string, string>
    })
  },

  createNewAccount(request: Request): Promise<AccountWithRoles> {
    return WebClient.post<AccountWithRoles>({
      baseUrl: accountConfig.baseUrl,
      path: accountConfig.accounts,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>
    })
  }
} as const
