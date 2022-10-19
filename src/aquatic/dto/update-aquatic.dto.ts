import { PartialType } from '@nestjs/mapped-types';
import { CreateAquaticDto } from './create-aquatic.dto';

export class UpdateAquaticDto extends PartialType(CreateAquaticDto) {}
