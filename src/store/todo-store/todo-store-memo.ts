import { MemoizeMethods } from '@iteasy/store';

import type { TTodoDto } from '@/dto';

@MemoizeMethods()
class TodoStoreMemo {
  /**
   * Finds task-element in the list by its id
   */
  getTodoElementById(todoList: TTodoDto.TTodoElementDto[], todoId?: string): TTodoDto.TTodoElementDto {
    return todoList.find((el: TTodoDto.TTodoElementDto): boolean => el.id === todoId)!;
  }
}

export const todoStoreMemo = new TodoStoreMemo();
