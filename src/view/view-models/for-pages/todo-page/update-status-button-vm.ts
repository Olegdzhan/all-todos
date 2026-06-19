import { ViewModel } from '@iteasy/store';
import { dictionaries } from '@/services/dictionary-service';
import { todoStore, todoStoreMemo } from '@/store';
import { moveStatus } from '@/utils/task-status-utils';

import type { ETaskStatus, ETaskStatusMove } from '@/domain/task-status';
import type { TTodoState } from '@/store';

type TUpdateStatusButtonVM = {
  actionLabel?: string;
  afterUpdateStatus: ETaskStatus | null;
};

type TUpdateStatusButtonVMAddon = {
  direction: ETaskStatusMove;
  todoId: string;
};

export const updateStatusButtonVM = new ViewModel<TTodoState, TUpdateStatusButtonVM, TUpdateStatusButtonVMAddon>(
  todoStore,
  (
    { todos }: TTodoState,
    { direction, todoId }: TUpdateStatusButtonVMAddon,
  ): TUpdateStatusButtonVM => {
    const { list } = todos!;
    const { status } = todoStoreMemo.getTodoElementById(list, todoId);
    const afterUpdateStatus = moveStatus(status, direction);
    const actionLabel = afterUpdateStatus ? dictionaries.todoStatusMap.get(afterUpdateStatus) : undefined;
    return {
      actionLabel,
      afterUpdateStatus,
    };
  },
);
