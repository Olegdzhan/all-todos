import { delayedPromise } from '@/utils/promises';
import { todoMockService } from './mock-service';

import type { TTodoDto } from '@/dto';

export class TodoApi {
  static async createTodo(payload: TTodoDto.TCreateTodoInDto): Promise<TTodoDto.TTodoElementDto> {
    const result = todoMockService.saveTodo(payload);
    return delayedPromise(300, result);
  }

  static async getTodos(): Promise<TTodoDto.TTodoListOutDto> {
    const result = todoMockService.getTodos();
    return delayedPromise(500, result);
  }

  static async updateTodo(payload: TTodoDto.TUpdateTodoInDto): Promise<TTodoDto.TTodoElementDto> {
    const result = todoMockService.updateTodo(payload);
    return delayedPromise(350, result);
  }

  static updateStatus(payload: TTodoDto.TUpdateTaskStatusInDto): Promise<TTodoDto.TTodoElementDto> {
    const result = todoMockService.updateTaskStatus(payload);
    return delayedPromise(200, result);
  }
}
