// todo/dto/update-todo.dto.ts
// import { BaseTodoDto } from './base-plant.dto';
import { BasePlantDto } from './base-plant.dto';

export class UpdatePlantDto extends BasePlantDto {
  completedAt: Date;
}