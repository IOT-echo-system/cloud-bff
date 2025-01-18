import { FeedService } from '../services'
import type { Request } from 'express'
import type { Feed } from '../typing/feed'

export const feedController = {
  addFeed(request: Request): Promise<Feed> {
    return FeedService.addFeed(request)
  },

  getFeeds(request: Request): Promise<Feed[]> {
    return FeedService.getFeeds(request)
  },

  updateName(request: Request): Promise<Feed> {
    return FeedService.updateName(request)
  }
} as const
