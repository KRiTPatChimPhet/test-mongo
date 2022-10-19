import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAquaticDto } from './dto/create-aquatic.dto';
import { UpdateAquaticDto } from './dto/update-aquatic.dto';
import { Aquatic } from './entities/aquatic.entity';
import { AquaticDocument } from './schema/aquaticfood.schema';

@Injectable()
export class AquaticService {
  constructor(
    @InjectModel(Aquatic.name) private _aquaticModel: Model<AquaticDocument>,
  ) {}

  async create(createDto: CreateAquaticDto) {
    return new this._aquaticModel(createDto).save();
  }

  async findAll() {
    return this._aquaticModel.find();
  }

  async findOne(id: string) {
    return this._aquaticModel.findById(id);
  }

  async findByName(name: string) {
    return this._aquaticModel.findOne({ name: name });
  }

  async update(id: string, updateUserDto: UpdateAquaticDto) {
    return this._aquaticModel.updateOne(
      { _id: id },
      { $set: { ...updateUserDto } },
    );
  }

  async delete(id: string) {
    return this._aquaticModel.deleteOne({ _id: id });
  }
}
