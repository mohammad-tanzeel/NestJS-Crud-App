import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
// import { ProductController } from './controller/product.controller';
import { TodoController } from './controller/todo-controller'; 

// import { ProductService } from './service/product.service';
import { Todo, TodoSchema } from './schemas/todo.schema';
import { TodoService } from './service/todo-service';
import { Plant, PlantSchema } from './schemas/plant.schema';
import { PlantController } from './controller/plant-controller';
import { PlantService } from './service/plant-service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/realestate', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}]),
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
    MongooseModule.forFeature([{ name: Plant.name, schema: PlantSchema }])],
 
  controllers: [AppController, TodoController,  PlantController ],
  providers: [AppService, TodoService,  PlantService],
})
export class AppModule {}
