import { Document } from "mongoose"

export interface Task extends Document{
    name:string
    agent:string
    area:string
    details:string
    setTask:boolean
}