import { Schema ,Prop, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';


export type RiderDocument = mongoose.HydratedDocument<Rider>;

@Schema()
export class Rider {
    @Prop()
    riderId: string;
    @Prop()
    latitude: number;
    @Prop()
    longitude: number;
  static schema: any;
};

export const RiderSchema = SchemaFactory.createForClass(Rider);