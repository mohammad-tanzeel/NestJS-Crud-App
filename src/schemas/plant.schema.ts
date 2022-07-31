import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from "mongoose";
import { State, StateSchema } from './state-schema';

export type PlantDocument = Plant & Document;

@Schema()
export class Plant {
  @Prop({ required: true })
  name: string;

  
  @Prop()
  fuel_category: string;

  @Prop()
  lattitude?: string;
  
  @Prop()
  longiude?: string;

  @Prop()
  completedAt?: Date;

  @Prop()
  deletedAt?: Date;

  @Prop({ type: StateSchema })
  // @Type(() => State)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'State' })
  state: State;
}

export const PlantSchema = SchemaFactory.createForClass(Plant);