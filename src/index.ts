import express, { Request, Response } from "express"
import * as dotenv from "dotenv"
dotenv.config()
import bodyParser from "body-parser"
import cors from "cors"
const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(bodyParser.json())


app.get('/', (_req: Request, res: Response)=>{
    return res.send('Sup nigguh')
})

app.listen(PORT, ()=>{
    console.log("App listening on http://localhost:3000");
})