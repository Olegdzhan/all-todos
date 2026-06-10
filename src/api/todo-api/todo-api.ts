import type { TTodoDto } from '@/dto';
import { delayedPromise } from '@/utils/promises';
import { todoMockService } from './mock-service';

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
}
