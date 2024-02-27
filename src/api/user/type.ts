import { type } from "os"

export interface ResponseData {
    "code": number,
    "data": object
    "message": string
}

export interface AdminLogin {
    account: string,
    password: string
}