import type { TTodoDto } from '@/dto';
import type { TTodoState } from './todo-store-types';

export const setError =(state: TTodoState, error: string | string[] | null): TTodoState => {
  if (!error && !state.errors) {
    return state;
  }
  const newErrors: string[] | null = typeof error === 'string' ? [error] : error;
  return { ...state, errors: newErrors };
};

export const setLoading = (state: TTodoState, loading: boolean): TTodoState => {
  if (loading === state.loading) {
    return state;
  }
  return { ...state, loading };
};

export const setTodos = (state: TTodoState, todosOutDto?: TTodoDto.TTodoListOutDto): TTodoState => {
  return { ...state, todos: todosOutDto };
};
