import { accountService } from '../services'
import type { AccountsWithRoleResponse, AccountWithRoles } from '../typing/account'
import type { Request } from 'express'

export const accountController = {
  getAccountsWithRoles(request: Request): Promise<AccountsWithRoleResponse> {
    return accountService.getAccountsWithRoles(request)
  },

  addAccount(request: Request): Promise<AccountWithRoles> {
    return accountService.createNewAccount(request)
  }
} as const
