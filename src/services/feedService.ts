import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { Feed } from '../typing/feed'
import WebClient from 'web-client-starter'

class FeedService_ {
  feedConfig = apiConfig.feed

  addFeed(request: Request): Promise<Feed> {
    return WebClient.post<Feed>({
      baseUrl: this.feedConfig.baseUrl,
      path: this.feedConfig.feeds,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>
    })
  }

  getFeeds(request: Request): Promise<Feed[]> {
    return WebClient.get<Feed[]>({
      baseUrl: this.feedConfig.baseUrl,
      path: this.feedConfig.feeds,
      headers: request.headers as Record<string, string>
    })
  }

  updateName(request: Request): Promise<Feed> {
    return WebClient.put<Feed>({
      baseUrl: this.feedConfig.baseUrl,
      path: this.feedConfig.updateName,
      headers: request.headers as Record<string, string>,
      uriVariables: request.params,
      body: request.body as Record<string, string>
    })
  }
}

export const FeedService = new FeedService_()
