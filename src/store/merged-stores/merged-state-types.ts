import type { TTodoState } from '../todo-store';
import type { TLoadingState } from '../loading-store';

export type TLoadingAndTodoState = {
  loaders: TLoadingState;
  todo: TTodoState;
};
