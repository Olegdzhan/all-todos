import type { TTodoDto } from '@/dto';

export class TodoMockService {
  private _todos: TTodoDto.TTodoElementDto[] = [];

  getTodos(): TTodoDto.TTodoListOutDto {
    return {
      list: this._todos,
    };
  }

  saveTodo(todo: TTodoDto.TCreateTodoInDto): TTodoDto.TTodoElementDto {
    const todoElement = {
      ...todo,
      id: String(Date.now()),
      done: false,
    };
    this._todos.push(todoElement);
    return todoElement;
  }
}
