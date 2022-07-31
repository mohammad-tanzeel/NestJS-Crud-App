import {Body,Controller,Delete,Get,Param,Post,Put, Query} from '@nestjs/common';
import { CreateStateDto } from 'src/dto/state/create-state.dto';
  // import { CreateTodoDto } from '../dto/create-todo.dto';
  // import { UpdateTodoDto } from '../dto/update-todo.dto';
  // import { TodoService } from 'src/service/todo-service';
import { StateService } from 'src/service/state-service';
  
  @Controller('states')
  export class StateController {
    constructor(private readonly service: StateService) {}
  
    @Get()
    async index(@Query() query: any) {
      console.log(query);
      return await this.service.findAll(query);
    }

    
    @Post()
    async create(@Body() createStateDto: CreateStateDto){
      return await this.service.create(createStateDto)
    }     
    
  }