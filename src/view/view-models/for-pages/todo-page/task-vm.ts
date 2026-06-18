import { ViewModel } from '@iteasy/store';
import { LOADERS_IDS } from '@/application/loaders';
import { mergedLoadingAndTodoStore } from '@/store';

import type { ETaskStatus } from '@/domain/task-status';
import type { TTodoDto } from '@/dto';
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
    const foundEl = todo.todos!.list.find((el: TTodoDto.TTodoElementDto): boolean => el.id === todoId)!;
    return {
      description: foundEl.description,
      loading,
      status: foundEl.status,
      title: foundEl.title,
    };
  },
);
