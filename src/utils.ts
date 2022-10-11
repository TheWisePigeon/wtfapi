import bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"
const salt = "bruh"
const secretKey = "bruh"
import { Request, Response } from "express"

const encryptPassword = (plainTextPassword: string) => {
    return bcrypt.hashSync(plainTextPassword, salt)

}

const passwordMatch = async (plainTextPassword: string, hashedPassword: string) => {

}

const createSignedToken = async (userInfo: userInfo) => {
    try {
        return jwt.sign(userInfo, secretKey)
    } catch (error) {
        console.log("Something went wrong");
        return false
    }

}

const authAndDecrypt = (req: Request) => {
    const authHeader = (req.headers.authorization as string).split(" ")[1]
}

export {
    encryptPassword,
    createSignedToken,
    authAndDecrypt
}

interface userInfo {
    username: string
    password: string
    email: string
}