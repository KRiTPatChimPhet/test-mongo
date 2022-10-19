import { Module } from '@nestjs/common';
import { AquaticService } from './aquatic.service';
import { AquaticController } from './aquatic.controller';
import { Aquatic } from './entities/aquatic.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { AquaticSchema } from './schema/aquaticfood.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Aquatic.name, schema: AquaticSchema }]),
  ],
  controllers: [AquaticController],
  providers: [AquaticService],
})
export class AquaticModule {}
