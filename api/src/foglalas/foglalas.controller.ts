import { Controller, Get, Post, Body } from '@nestjs/common';
import { FoglalasService } from './foglalas.service';

@Controller('foglalas')
export class FoglalasController {
  constructor(private readonly foglalasService: FoglalasService) {}

  @Post()
  foglalasKeszit(@Body() body: { nev: string; email: string; datum: string }) {
    return this.foglalasService.foglalasKeszit(body);
  }

  @Get()
  foglalasKer() {
    return this.foglalasService.foglalasKer();
  }
}
