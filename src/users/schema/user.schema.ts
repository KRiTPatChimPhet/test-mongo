/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop({ unique: true })
  firstName: string;

  @Prop()
  lastName: string;

  @Prop([String])
  address: string[];

  @Prop({ unique: true })
  age: number;


}

export const UserSchema = SchemaFactory.createForClass(User);
