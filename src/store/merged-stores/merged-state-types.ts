import type { TLoadingState } from '../loading-store';
import type { TTodoState } from '../todo-store';

export type TLoadingAndTodoState = {
  loaders: TLoadingState;
  todo: TTodoState;
};
