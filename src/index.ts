//92423146

import express, { NextFunction, Request, Response } from "express"
import * as dotenv from "dotenv"
dotenv.config()
import { connectToDB } from "./config"
import { createSignedToken, authAndDecrypt, encryptPassword } from "./utils"
import bodyParser from "body-parser"
import cors from "cors"
import { Usermodel } from "./models"
const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(bodyParser.json())




app.get('/', (_req: Request, res: Response) => {
    return res.send('Sup nigguh')
})

app.post('/register', async (req: Request, res: Response) => {
    const { username, email, password } = req.body
    const token = await createSignedToken(req.body)
    if (!token) {
        return res.status(500).send({
            "message": "Something went wrong"
        })
    }
    const newUser = new Usermodel({username, email, password: encryptPassword(password)})
    newUser.save((err, result)=>{
        if (err) {
            console.log(`Something went wrong ${err.message} `);
            res.status(500).send({
                "message":"Something went wrong"
            })
        }


        return res.status(200).send({
            "token":token
        })
    })
})

app.post('/login', async (req: Request, res: Response) => {
    const { username, email, password } = req.body
    if (username) {
        return
    }

})

app.listen(PORT, async () => {
    await connectToDB()
    console.log("App listening on http://localhost:3000");
})