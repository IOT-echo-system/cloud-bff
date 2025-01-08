import express from 'express'
import {
  authRouter,
  boardRouter,
  masterRouter,
  premisesRouter,
  routineRouter,
  userRouter,
  widgetRouter,
  zoneRouter
} from './routers'

const router = express.Router()

router.use('/masters', masterRouter)
router.use('/users', userRouter)
router.use('/auth', authRouter)
router.use('/premises', premisesRouter)
router.use('/premises', zoneRouter)
router.use('/premises', boardRouter)
router.use('/routines', routineRouter)
router.use('/widgets', widgetRouter)

export default router
