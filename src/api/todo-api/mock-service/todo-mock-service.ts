import { ETaskStatus } from '@/domain/task-status';
import { moveStatus } from '@/utils/task-status-utils';
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
      status: ETaskStatus.Open,
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

  updateTaskStatus(payload: TTodoDto.TUpdateTaskStatusInDto): TTodoDto.TTodoElementDto {
    const todo = this._todos.find((el: TTodoDto.TTodoElementDto): boolean => el.id === payload.id);
    if (!todo) {
      throw new Error(`There is no task with id: ${payload.id}`);
    }
    const status = moveStatus(todo.status, payload.statusMove);
    if (status === null) {
      throw new Error(`Status ${todo.status} could not be updated by direction ${payload.statusMove}`);
    }
    todo.status = status;
    return todo;
  }
}
