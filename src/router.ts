import express from 'express'
import {
  authRouter,
  boardRouter,
  feedRouter,
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
router.use('/zones', zoneRouter)
router.use('/boards', boardRouter)
router.use('/feeds', feedRouter)
router.use('/widgets', widgetRouter)
router.use('/routines', routineRouter)

export default router
