import { AuthController } from '../controllers/authController'
import { AuthService } from '../services/authService'

const authService = new AuthService()
export const authController = new AuthController(authService)
