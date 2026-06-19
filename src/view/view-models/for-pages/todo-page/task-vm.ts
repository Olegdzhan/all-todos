import { ViewModel } from '@iteasy/store';
import { LOADERS_IDS } from '@/application/loaders';
import { mergedLoadingAndTodoStore, todoStoreMemo } from '@/store';

import type { ETaskStatus } from '@/domain/task-status';
import type { TLoadingAndTodoState } from '@/store';

type TTaskVM = {
  description: string;
  loading: string | boolean;
  status: ETaskStatus;
  title: string;
}

export const taskVM = new ViewModel<TLoadingAndTodoState, TTaskVM, string>(
  mergedLoadingAndTodoStore,
  (
    { loaders, todo }: TLoadingAndTodoState,
    todoId: string,
  ) => {
    const loading = loaders[LOADERS_IDS.UPDATE_STATUS$(todoId!)] || false;
    // taskVM is available from Task Component, which renders only, when the list exists
    const { list } = todo.todos!;
    const foundEl = todoStoreMemo.getTodoElementById(list, todoId);
    return {
      description: foundEl.description,
      loading,
      status: foundEl.status,
      title: foundEl.title,
    };
  },
);
