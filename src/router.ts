import express from 'express'
import { authRouter, accountRouter } from './routers'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/accounts', accountRouter)

export default router
