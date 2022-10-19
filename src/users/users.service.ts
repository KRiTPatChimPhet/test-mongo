import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserDocument } from './schema/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private _userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return new this._userModel(createUserDto).save();
  }

  async findAll() {
    return this._userModel.find();
  }

  async findOne(id: string) {
    return this._userModel.findOne({ _id: id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this._userModel.updateOne({ id }, { $set: { ...updateUserDto } });
  }

  async remove(id: string) {
    return this._userModel.deleteOne({ id });
  }
}
