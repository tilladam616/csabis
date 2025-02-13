import { Test, TestingModule } from '@nestjs/testing';
import { FoglalasController } from './foglalas.controller';

describe('FoglalasController', () => {
  let controller: FoglalasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoglalasController],
    }).compile();

    controller = module.get<FoglalasController>(FoglalasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
