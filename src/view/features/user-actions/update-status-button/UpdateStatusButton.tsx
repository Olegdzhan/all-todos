import { memo, useCallback, type MouseEvent } from 'react';
import { ETodoStatus, ETodoTaskStatusMove } from '@/dto';
import { dictionaries } from '@/services/dictionary-service';
import { processUpdateTaskStatus } from '@/services/todo-service';
import { moveStatus } from '@/utils/task-status-utils';
import { EFlatButtonType, FlatButton } from '@/view/ui-kit';

type TUpdateStatusButtonProps = {
  direction: ETodoTaskStatusMove;
  id: string;
  status: ETodoStatus;
};

export const UpdateStatusButton = memo(({
  direction,
  id,
  status,
}: TUpdateStatusButtonProps) => {
  const nextStatus = moveStatus(status, direction);

  if (nextStatus === null) {
    return null;
  }

  const onClick = useCallback((event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    processUpdateTaskStatus(id, direction);
  }, [id, direction]);

  const label = dictionaries.todoStatusMap.get(nextStatus);

  return (
    <FlatButton
      htmlType="button"
      onClick={onClick}
      type={direction === ETodoTaskStatusMove.Next ? EFlatButtonType.Primary : EFlatButtonType.Secondary}
    >
      {label}
    </FlatButton>
  );
});
