import { Module } from '@nestjs/common';
import { RiderCoordinatesController } from './rider-coordinates.controller';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Rider, RiderSchema } from '../schema/rider.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [MongooseModule.forFeature(
    [
      {
        name: Rider.name,
        schema: RiderSchema
      }
    ]
  ),
  ClientsModule.register([
    {
      name: 'RIDE_SERVICE',
      transport: Transport.TCP, // Transport.TCP
    },
  ])],
  controllers: [RiderCoordinatesController],
  providers: [RiderCoordinatesService]
})
export class RiderCoordinatesModule { }
