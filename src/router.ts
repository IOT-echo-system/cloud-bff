import express from 'express'
import { authRouter, projectRouter } from './routers'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/projects', projectRouter)

export default router
