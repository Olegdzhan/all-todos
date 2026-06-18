import { ViewModel } from '@iteasy/store';
import { LOADERS_IDS } from '@/application/loaders';
import { mergedLoadingAndTodoStore } from '@/store';

import type { TTodoDto } from '@/dto';
import type { TLoadingAndTodoState } from '@/store';

type TTodoListSectionVM = {
  listIsLoading: string | boolean;
  todoIds: string[];
}

const DEFAULT_EMPTY_ID_LIST: string[] = [];

export const todoListSectionVM = new ViewModel<TLoadingAndTodoState, TTodoListSectionVM>(
  mergedLoadingAndTodoStore,
  ({ loaders, todo }: TLoadingAndTodoState): TTodoListSectionVM => {
    const listIsLoading = loaders[LOADERS_IDS.GET_TODO_LIST] || false;
    const todoIds = todo.todos?.list.map((el: TTodoDto.TTodoElementDto): string => el.id) ?? DEFAULT_EMPTY_ID_LIST;
    return { listIsLoading, todoIds };
  },
);
