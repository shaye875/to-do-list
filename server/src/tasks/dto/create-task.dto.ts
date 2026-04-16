import { IsString } from "@nestjs/class-validator";
import { IsBoolean } from "class-validator";

export class CreateTaskDto {
    @IsString()
    name:string

    @IsString()
    agent:string

    @IsString()
    area:string

    @IsString()
    details:string

    @IsBoolean()
    setTask:boolean
}
