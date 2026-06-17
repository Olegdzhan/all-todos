import { memo, useCallback, type MouseEvent } from 'react';
import { ETaskStatusMove, type ETaskStatus } from '@/domain/task-status';
import { dictionaries } from '@/services/dictionary-service';
import { processUpdateTaskStatus } from '@/services/todo-service';
import { moveStatus } from '@/utils/task-status-utils';
import { EFlatButtonType, FlatButton } from '@/view/ui-kit';

type TUpdateStatusButtonProps = {
  direction: ETaskStatusMove;
  id: string;
  status: ETaskStatus;
};

export const UpdateStatusButton = memo(({
  direction,
  id,
  status,
}: TUpdateStatusButtonProps) => {
  const nextStatus = moveStatus(status, direction);

  const onClick = useCallback((event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    processUpdateTaskStatus(id, direction);
  }, [id, direction]);

  if (nextStatus === null) {
    return null;
  }

  const label = dictionaries.todoStatusMap.get(nextStatus);

  return (
    <FlatButton
      htmlType="button"
      onClick={onClick}
      type={direction === ETaskStatusMove.Next ? EFlatButtonType.Primary : EFlatButtonType.Secondary}
    >
      {label}
    </FlatButton>
  );
});
