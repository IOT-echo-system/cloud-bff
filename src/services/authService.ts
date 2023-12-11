import type { Document } from '../typing'
import WebClient from 'web-client-starter'
import { Config } from '../config'

export class AuthService {
  signUp(userData: Document): Promise<Document> {
    return WebClient.post<Document>({
      baseUrl: Config.AUTH_SERVICE_BASE_URL,
      path: Config.SIGN_UP_PATH,
      body: userData
    })
  }

  login(userCredentials: Document): Promise<Document> {
    return WebClient.post<Document>({
      baseUrl: Config.AUTH_SERVICE_BASE_URL,
      path: Config.LOGIN_PATH,
      body: userCredentials
    })
  }
}
