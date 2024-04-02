import express from 'express'
import { authRouter, projectRouter, boardRouter, widgetRouter } from './routers'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/projects', projectRouter)
router.use('/boards', boardRouter)
router.use('/widgets', widgetRouter)

export default router
