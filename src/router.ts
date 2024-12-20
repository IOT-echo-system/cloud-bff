import express from 'express'
import { authRouter, premisesRouter, boardRouter, routineRouter, widgetRouter, userRouter } from './routers'

const router = express.Router()

router.use('/users', userRouter)
router.use('/auth', authRouter)
router.use('/premises', premisesRouter)
router.use('/boards', boardRouter)
router.use('/routines', routineRouter)
router.use('/widgets', widgetRouter)

export default router
