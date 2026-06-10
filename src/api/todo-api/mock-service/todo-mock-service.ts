import type { TTodoDto } from '@/dto';

export class TodoMockService {
  private _todos: TTodoDto.TTodoElementDto[] = [];

  getTodos(): TTodoDto.TTodoListOutDto {
    return {
      list: this._todos,
    };
  }

  saveTodo(payload: TTodoDto.TCreateTodoInDto): TTodoDto.TTodoElementDto {
    const todoElement = {
      ...payload,
      id: String(Date.now()),
      done: false,
    };
    this._todos.push(todoElement);
    return todoElement;
  }

  updateTodo(payload: TTodoDto.TUpdateTodoInDto): TTodoDto.TTodoElementDto {
    const foundIndex = this._todos.findIndex((el: TTodoDto.TTodoElementDto): boolean => el.id === payload.id);
    const updatedTodo = { ...this._todos[foundIndex], ...payload };
    this._todos[foundIndex] = updatedTodo;
    return updatedTodo;
  }
}
