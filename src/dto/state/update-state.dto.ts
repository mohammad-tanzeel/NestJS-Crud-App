// todo/dto/update-todo.dto.ts
// import { BaseTodoDto } from './base-plant.dto';
import { BaseStateDto } from './base-state.dto';

export class UpdateStateDto extends BaseStateDto {
  completedAt: Date;
}