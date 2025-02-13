import { Injectable } from '@nestjs/common';

@Injectable()
export class FoglalasService {
  private foglalasok: { nev: string; email: string; datum: string }[] = [];

  foglalasKeszit(foglalasAdat: { nev: string; email: string; datum: string }) {
    this.foglalasok.push(foglalasAdat);
    return { uzenet: 'Sikeres foglalás!', adat: foglalasAdat };
  }

  foglalasKer() {
    return this.foglalasok;
  }
}
