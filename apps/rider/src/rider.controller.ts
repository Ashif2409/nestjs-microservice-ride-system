import { Controller, Get } from '@nestjs/common';
import { RiderService } from './rider.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

 @MessagePattern({ cmd: 'get-rider-by-id' })
   getRiderById(@Payload() data: { id: string; lat: number; lng: number }) {
     return {
       id: data.id,
       name: 'Rider ' + data.id,
       coordinates: {
         lat: data.lat,
         lng: data.lng,
       },
     };
   }
}
