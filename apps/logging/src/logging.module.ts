import { Module } from '@nestjs/common';
import { LoggingController } from './logging.controller';
import { LoggingService } from './logging.service';
import { RiderCoordinatesModule } from './rider-coordinates/rider-coordinates.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/key.config';

@Module({
  imports: [RiderCoordinatesModule,MongooseModule.forRoot(config.mongoURI)],
  controllers: [LoggingController],
  providers: [LoggingService],
})
export class LoggingModule {}
