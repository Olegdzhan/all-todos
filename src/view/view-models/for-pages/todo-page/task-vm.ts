import { LOADERS_IDS } from '@/application/loaders';
import type { ETaskStatus } from '@/domain/task-status';
import type { TTodoDto } from '@/dto';
import type { TLoadingAndTodoState } from '@/store';
import type { TViewModelParametricSelectors } from '@/store/lib';

type TTaskDataVM = {
  description: string;
  status: ETaskStatus;
  title: string;
};

type TTaskVM = {
  loading: string | boolean;
  task: TTaskDataVM;
}

export const taskVM: TViewModelParametricSelectors<TLoadingAndTodoState, TTaskVM, string> = {
  loading: ({ loaders }: TLoadingAndTodoState, todoId: string): string | boolean => (
    loaders[LOADERS_IDS.UPDATE_STATUS$(todoId!)] || false
  ),
  task: ({ todo }: TLoadingAndTodoState, todoId: string): TTaskDataVM => {
    const foundEl = todo.todos!.list.find((el: TTodoDto.TTodoElementDto): boolean => el.id === todoId)!;
    return {
      description: foundEl.description,
      status: foundEl.status,
      title: foundEl.title,
    };
  },
};
