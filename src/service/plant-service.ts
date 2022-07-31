import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlantDto } from 'src/dto/plant/create-plant.dto';
import { Plant, PlantDocument } from 'src/schemas/plant.schema';

@Injectable()
export class PlantService {
  constructor(
    @InjectModel(Plant.name) private readonly model: Model<PlantDocument>,
  ) {}

  async findAll(query): Promise<Plant[]> {
    console.log(query);
    return await this.model.find({"state":query.state}).exec();
    // return await this.userModel.findOne({ _id: id }).populate('role', '', this.roleModel).exec();
  }

  async findByState(query): Promise<Plant[]> {
  
    
    return await this.model.find({"state":query.state}).exec();
    // return await this.model.find().exec();
  }

  async create(createTodoDto: CreatePlantDto): Promise<Plant> {
    // console.log(createTodoDto);
    return await new this.model({
      ...createTodoDto,
      createdAt: new Date(),
    }).save();
  }

}