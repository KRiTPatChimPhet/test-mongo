import { Test, TestingModule } from '@nestjs/testing';
import { AquaticController } from './aquatic.controller';
import { AquaticService } from './aquatic.service';

describe('AquaticController', () => {
  let controller: AquaticController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AquaticController],
      providers: [AquaticService],
    }).compile();

    controller = module.get<AquaticController>(AquaticController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
