import { Store } from '../lib/store';
import { ETodoStoreEvents } from './todo-store-enums';
import { setError, setTodos, setLoading } from './todo-store-operators';
import type { TTodoState } from './todo-store-types';

const initialState: TTodoState = {
  errors: null,
  loading: false,
};

export const todoStore = new Store<TTodoState>(initialState)
  .reg(ETodoStoreEvents.SetError, setError)
  .reg(ETodoStoreEvents.SetLoading, setLoading)
  .reg(ETodoStoreEvents.SetTodos, setTodos);
