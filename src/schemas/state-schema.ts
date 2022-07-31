import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// import { Transform } from 'class-transformer';
import * as mongoose from "mongoose";
import { Plant } from './plant.schema';

export type StateDocument = State & Document;
 
@Schema()
export class State {

  @Prop({ type: String, required: true, unique: true, index: true })
  name: string;
  
  @Prop()
  completedAt?: Date;
 
}
 
export const StateSchema = SchemaFactory.createForClass(State);