import { userService } from '../services'
import type { SignUpApiResponse } from '../typing/auth'
import type { Request } from 'express'

export const userController = {
  registration(request: Request): Promise<SignUpApiResponse> {
    return userService.registration(request)
  }
} as const
