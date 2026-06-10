import { create } from 'zustand';
import type { TTodoDto } from '@/dto';
import { todoStore, ETodoStoreEvents, type TTodoState } from '@/store';
import { createReactStore } from '../react-controller';

export const [
  TodoStoreContext,
  TodoStoreProvider,
] = createReactStore(todoStore);

type TTodoZusStore = TTodoState & {

};

export const useTodoStore = create<TTodoZusStore>((set) => ({
  errors: todoStore.state.errors,
  loading: todoStore.state.loading,
  todos: todoStore.state.todos,
  setLoading: (loading: boolean) => set((): { loading: boolean; } => {
    todoStore.act(ETodoStoreEvents.SetLoading, loading);
    return { loading: todoStore.state.loading };
  }),
  setErrors: (errors: string | string[] | null) => set((): { errors: string[] | null } => {
    todoStore.act(ETodoStoreEvents.SetError, errors);
    return { errors: todoStore.state.errors };
  }),
  setTodos: (todos: TTodoDto.TTodoListOutDto) => set((): { todos: TTodoDto.TTodoListOutDto } => {
    todoStore.act(ETodoStoreEvents.SetTodos, todos);
    return { todos: todoStore.state.todos! };
  }),
}));