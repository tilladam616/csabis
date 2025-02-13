import { Test, TestingModule } from '@nestjs/testing';
import { FoglalasService } from './foglalas.service';

describe('FoglalasService', () => {
  let service: FoglalasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoglalasService],
    }).compile();

    service = module.get<FoglalasService>(FoglalasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
