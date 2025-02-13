export declare class FoglalasService {
    private foglalasok;
    foglalasKeszit(foglalasAdat: {
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
