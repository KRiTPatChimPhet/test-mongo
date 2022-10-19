/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AquaticDocument = Aquatic & Document;

@Schema()
export class Aquatic {

  @Prop()
  name: string;

  @Prop()
  description: string;
  
  @Prop()
  imagePath: string;

  @Prop()
  quantity: number;

  @Prop([String])
  menu: string[];

}

export const AquaticSchema = SchemaFactory.createForClass(Aquatic);
