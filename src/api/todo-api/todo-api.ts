import { TodoEndpoints } from './todo-endpoints';

import type { TTodoDto } from '@/dto';

export class TodoApi {
  private readonly ep: TodoEndpoints;

  constructor() {
    this.ep = new TodoEndpoints('/api/todo-service');
  }

  async createTodo(payload: TTodoDto.TCreateTodoInDto): Promise<TTodoDto.TTodoElementDto> {
    const url = this.ep.postCreate();
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
      body: JSON.stringify(payload),
    });
    if (res.status === 201) {
      return await res.json() as TTodoDto.TTodoElementDto;
    } else {
      throw new Error('Received unexpected status code: ' + res.status);
    }
  }

  async deleteTodo(payload: TTodoDto.TDeleteTodoInDto): Promise<void> {
    const url = this.ep.deleteTodo(payload.id);
    const res = await fetch(url, {
      method: 'DELETE',
    });
    if (res.status === 204) {
      return;
    } else {
      throw new Error('Received unexpected status code: ' + res.status);
    }
  }

  async getAllTodos(): Promise<TTodoDto.TTodoListOutDto> {
    const url = this.ep.getAll();
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
    if (res.status === 200) {
      return await res.json() as TTodoDto.TTodoListOutDto;
    } else {
      throw new Error('Received unexpected status code: ' + res.status);
    }
  }

  async getTodoById(payload: TTodoDto.TGetTodoByIdInDto): Promise<TTodoDto.TTodoElementDto> {
    const url = this.ep.getById(payload.id);
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
    if (res.status === 200) {
      return await res.json() as TTodoDto.TTodoElementDto;
    } else {
      throw new Error('Received unexpected status code: ' + res.status);
    }
  }

  async updateTodo(payload: TTodoDto.TUpdateTodoInDto): Promise<TTodoDto.TTodoElementDto> {
    const { id, ...body } = payload;
    const url = this.ep.putUpdate(id);
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      return await res.json() as TTodoDto.TTodoElementDto;
    } else {
      throw new Error('Received unexpected status code: ' + res.status);
    }
  }

  async updateTaskStatus(payload: TTodoDto.TUpdateTaskStatusInDto): Promise<void> {
    const url = this.ep.patchUpdateStatus(payload.id, payload.statusMove);
    const res = await fetch(url, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
    if (res.status === 200) {
      return;
    } else {
      throw new Error('Received unexpected status code: ' + res.status);
    }
  }
}
