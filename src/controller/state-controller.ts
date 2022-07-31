import {Body,Controller,Delete,Get,Param,Post,Put, Query} from '@nestjs/common';
import { CreatePlantDto } from 'src/dto/plant/create-plant.dto';
  // import { CreateTodoDto } from '../dto/create-todo.dto';
  // import { UpdateTodoDto } from '../dto/update-todo.dto';
  // import { TodoService } from 'src/service/todo-service';
import { StateService } from 'src/service/state-service';
  
  @Controller('plants')
  export class PlantController {
    constructor(private readonly service: StateService) {}
  
    @Get()
    async index(@Query() query: any) {
      console.log(query);
      return await this.service.findAll(query);
    }

    
    @Post()
    async create(@Body() createPlantDto: CreatePlantDto){
      return await this.service.create(createPlantDto)
    }     
    
  }