import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateCoordinateDto{
    @IsNotEmpty()
    @IsString()
    riderId: string;

    @IsNotEmpty()
    @IsNumber()
    latitude: number
    
    @IsNotEmpty()
    @IsNumber()
    longitude: number;
}