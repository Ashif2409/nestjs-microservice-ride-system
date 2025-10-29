import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCoordinateDto } from '../dto/rider.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    constructor(private readonly riderCoordinatesService: RiderCoordinatesService) {}
    @Get()
    getRiderCoordinates() {
        return this.riderCoordinatesService.getRiderCoordinates();
    }

    @Get(':id/:lat/:lng')
    getRiderById(
        @Param('id') id: string,
        @Param('lat') lat: number,
        @Param('lng') lng: number
    ) {
        return this.riderCoordinatesService.getRiderById(id, lat, lng);
    }

    @Post()
    addRiderCoordinate(
        @Body() createCoordinateDto: CreateCoordinateDto
    ) {
        return this.riderCoordinatesService.addRiderCoordinate(createCoordinateDto);
    }
}
