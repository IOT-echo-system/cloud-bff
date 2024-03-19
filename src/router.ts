import express from 'express'
import { authRouter, projectRouter, boardRouter } from './routers'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/projects', projectRouter)
router.use('/boards', boardRouter)

export default router
