import type { TTodoDto } from '@/dto';
import type { TTodoState } from './todo-store-types';

export class TodoStoreOperator {
  static setError(state: TTodoState, error: string | string[] | null): TTodoState {
    if (!error && !state.errors) {
    return state;
  }
  const newErrors: string[] | null = typeof error === 'string' ? [error] : error;
  return { ...state, errors: newErrors };
  }

  static setTodos(state: TTodoState, todosOutDto?: TTodoDto.TTodoListOutDto): TTodoState {
    return { ...state, todos: todosOutDto };
  }
}
