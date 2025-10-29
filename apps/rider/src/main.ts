import { NestFactory } from '@nestjs/core';
import { RiderModule } from './rider.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from 'apps/ride-system/src/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.TCP
    });
    await app.listen();
}
bootstrap();
