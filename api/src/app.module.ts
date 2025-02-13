import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoglalasController } from './foglalas/foglalas.controller';
import { FoglalasService } from './foglalas/foglalas.service';

@Module({
  imports: [],
  controllers: [AppController, FoglalasController],
  providers: [AppService, FoglalasService],
})
export class AppModule {}
