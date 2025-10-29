import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {

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
