import { Store } from '@iteasy/store';
import { ETodoStoreEvents } from './todo-store-enums';
import { TodoStoreOperator } from './todo-store-operator';
import type { TTodoState } from './todo-store-types';

const initialState: TTodoState = {
  errors: null,
};

export const todoStore = new Store<TTodoState>(initialState)
  .reg(ETodoStoreEvents.SetError, TodoStoreOperator.setError)
  .reg(ETodoStoreEvents.SetTodos, TodoStoreOperator.setTodos);
