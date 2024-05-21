import express from 'express'
import { handleRequest } from './handleRequest'
import { projectController } from '../controllers'

const projectRouter = express.Router()

projectRouter.get('/project-with-roles', handleRequest(projectController.getProjectsWithRoles))
projectRouter.post('', handleRequest(projectController.addProject))
projectRouter.get('/project-details', handleRequest(projectController.getProjectDetails))
projectRouter.put('/:projectId/name', handleRequest(projectController.updateProjectName))

export default projectRouter
