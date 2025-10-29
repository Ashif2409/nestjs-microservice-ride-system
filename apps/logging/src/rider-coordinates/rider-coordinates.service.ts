import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Rider } from '../schema/rider.schema';
import { Model } from 'mongoose';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RiderCoordinatesService {
    constructor(
        @InjectModel(Rider.name)
        private readonly riderModel: Model<Rider>,
        @Inject('RIDE_SERVICE') private client:ClientProxy
    ){}

    async getRiderCoordinates(): Promise<Rider[]> {
        return await this.riderModel.find().exec();
    }

    async getRiderById(id: string, lat: number, lng: number) {
      return this.client.send({ cmd: 'get-rider-by-id' }, { id, lat, lng });
    }

    async addRiderCoordinate(createCoordinateDto: Rider): Promise<Rider> {
    const newRider = new this.riderModel(createCoordinateDto);
    return await newRider.save();
  }
}
