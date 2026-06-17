import { merge } from '../lib';
import { loadingStore } from '../loading-store';
import { todoStore } from '../todo-store';

export const mergedLoadingAndTodoStore = merge({
  loaders: loadingStore,
  todo: todoStore,
});
