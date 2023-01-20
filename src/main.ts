import { CommandFactory } from 'nest-commander';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.createApplicationContext(AppModule);
  await CommandFactory.run(AppModule, ['warn', 'error']);
}
bootstrap();