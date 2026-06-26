import type { ETaskStatusMove } from '@/domain/task-status';

export class TodoEndpoints {
  private readonly basePath: string;

  constructor(apiPath: string) {
    this.basePath = `${apiPath}/todos/`;
  }

  deleteTodo(id: number): string {
    return `${this. basePath}/${id}`;
  }

  getAll(): string {
    return this.basePath;
  }

  getById(id: number): string {
    return `${this. basePath}/${id}`;
  }

  postCreate(): string {
    return this.basePath;
  }

  patchUpdateStatus(id: number, direction: ETaskStatusMove): string {
    const params = new URLSearchParams();
    params.append('direction', direction);
    return `${this. basePath}/${id}/status?${params}`;
  }

  putUpdate(id: number): string {
    return `${this. basePath}/${id}`;
  }
}
