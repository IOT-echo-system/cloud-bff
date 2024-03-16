import express from 'express'
import { handleRequest } from './handleRequest'
import { projectController } from '../controllers'

const projectRouter = express.Router()

projectRouter.get('', handleRequest(projectController.getProjectsWithRoles))
projectRouter.post('', handleRequest(projectController.addProject))
projectRouter.get('/project-details', handleRequest(projectController.getProjectDetails))

export default projectRouter