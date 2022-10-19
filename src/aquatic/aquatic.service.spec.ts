import { Test, TestingModule } from '@nestjs/testing';
import { AquaticService } from './aquatic.service';

describe('AquaticService', () => {
  let service: AquaticService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AquaticService],
    }).compile();

    service = module.get<AquaticService>(AquaticService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
