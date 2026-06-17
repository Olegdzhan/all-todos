import { LOADERS_IDS } from '@/application/loaders';
import type { TTodoDto } from '@/dto';
import type { TLoadingAndTodoState } from '@/store';
import type { TViewModelSelectors } from '@/store/lib';

type TTodoListSectionVM = {
  listIsLoading: string | boolean;
  todoIds: string[];
}

const DEFAULT_EMPTY_ID_LIST: string[] = [];

export const todoListSectionVM: TViewModelSelectors<TLoadingAndTodoState, TTodoListSectionVM> = {
  listIsLoading: ({ loaders }: TLoadingAndTodoState): string | boolean => loaders[LOADERS_IDS.GET_TODO_LIST] || false,
  todoIds: ({ todo }: TLoadingAndTodoState): string[] => (
    todo.todos?.list.map((el: TTodoDto.TTodoElementDto): string => el.id) ?? DEFAULT_EMPTY_ID_LIST
  ),
};
