import { dictionaries } from '@/services/dictionary-service';
import { moveStatus } from '@/utils/task-status-utils';

import type { ETaskStatus, ETaskStatusMove } from '@/domain/task-status';
import type { TTodoDto } from '@/dto';
import type { TTodoState } from '@/store';
import type { TViewModelParametricSelectors } from '@/store/lib';

type TUpdateStatusButtonStatusesVM = {
  actionLabel?: string;
  afterUpdateStatus: ETaskStatus | null;
};

type TUpdateStatusButtonVM = {
  statuses: TUpdateStatusButtonStatusesVM;
};

type TUpdateStatusButtonVMAddon = {
  direction: ETaskStatusMove;
  todoId: string;
};

export const updateStatusButtonVM: TViewModelParametricSelectors<
  TTodoState,
  TUpdateStatusButtonVM,
  TUpdateStatusButtonVMAddon
> = {
  statuses: (
    { todos }: TTodoState,
    { direction, todoId }: TUpdateStatusButtonVMAddon,
  ): TUpdateStatusButtonStatusesVM => {
    const { status } = todos!.list.find((el: TTodoDto.TTodoElementDto): boolean => el.id === todoId)!;
    const afterUpdateStatus = moveStatus(status, direction);
    const actionLabel = afterUpdateStatus ? dictionaries.todoStatusMap.get(afterUpdateStatus) : undefined;
    return {
      actionLabel,
      afterUpdateStatus,
    };
  },
};
