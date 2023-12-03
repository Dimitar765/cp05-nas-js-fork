import { IsNotEmpty, IsString } from "class-validator";

export class aNoteDto {
    @IsNotEmpty()
    id: number;

    // @IsNotEmpty()
    // @IsString()
    // title?: string;

    @IsNotEmpty()
    @IsString()
    content: string;
}