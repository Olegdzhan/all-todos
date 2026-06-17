import { merge } from '../lib';
import { todoStore } from '../todo-store';
import { loadingStore } from '../loading-store';

export const mergedLoadingAndTodoStore = merge({
  loaders: loadingStore,
  todo: todoStore,
});
