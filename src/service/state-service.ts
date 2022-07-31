import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStateDto } from 'src/dto/state/create-state.dto';
import { State, StateDocument } from 'src/schemas/state-schema';

@Injectable()
export class StateService {
  constructor(
    @InjectModel(State.name) private readonly model: Model<StateDocument>,
  ) {}

  async findAll(query): Promise<State[]> {
    console.log(query);
    return await this.model.find({"state":query.state}).exec();
    // return await this.userModel.findOne({ _id: id }).populate('role', '', this.roleModel).exec();
  }
    

  async create(createTodoDto: CreateStateDto): Promise<State> {
    // console.log(createTodoDto);
    return await new this.model({
      ...createTodoDto,
      createdAt: new Date(),
    }).save();
  }

}