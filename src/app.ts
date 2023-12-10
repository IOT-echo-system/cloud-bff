import express, {Response, Request} from 'express'

const app = express()
app.get("/", (_req: Request, res: Response) => {
    res.send({message: "Hello human, you have just arrived at cloud-bff"})
})

export default app
