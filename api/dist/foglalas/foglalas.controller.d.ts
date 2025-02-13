import { FoglalasService } from './foglalas.service';
export declare class FoglalasController {
    private readonly foglalasService;
    constructor(foglalasService: FoglalasService);
    foglalasKeszit(body: {
        nev: string;
        email: string;
        datum: string;
    }): {
        uzenet: string;
        adat: {
            nev: string;
            email: string;
            datum: string;
        };
    };
    foglalasKer(): {
        nev: string;
        email: string;
        datum: string;
    }[];
}
