import { ViewModel } from '@iteasy/store';
import { dictionaries } from '@/services/dictionary-service';
import { todoStore } from '@/store';
import { moveStatus } from '@/utils/task-status-utils';

import type { ETaskStatus, ETaskStatusMove } from '@/domain/task-status';
import type { TTodoDto } from '@/dto';
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
    const { status } = todos!.list.find((el: TTodoDto.TTodoElementDto): boolean => el.id === todoId)!;
    const afterUpdateStatus = moveStatus(status, direction);
    const actionLabel = afterUpdateStatus ? dictionaries.todoStatusMap.get(afterUpdateStatus) : undefined;
    return {
      actionLabel,
      afterUpdateStatus,
    };
  },
);
