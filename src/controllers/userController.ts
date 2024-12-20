import { userService } from '../services'
import type { SignUpApiResponse } from '../typing/auth'
import type { Request } from 'express'
import type { User } from '../typing/user'

export const userController = {
  registration(request: Request): Promise<SignUpApiResponse> {
    return userService.registration(request)
  },

  me(request: Request): Promise<User> {
    return userService.me(request)
  }
} as const
