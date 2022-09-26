import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port_number = parseInt(process.env.PORT_NUMBER);
  await app.listen((port_number), () => {
    console.info(`Application running on port ${port_number}`);
  });
}
bootstrap();
