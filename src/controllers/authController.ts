import type { Document } from '../typing'
import type { AuthService } from '../services'

export class AuthController {
  private readonly authService: AuthService

  constructor(authService: AuthService) {
    this.authService = authService
  }

  signUp(userData: Document): Promise<Document> {
    return this.authService.signUp(userData)
  }

  login(userCredentials: Document): Promise<Document> {
    return this.authService.login(userCredentials)
  }
}
