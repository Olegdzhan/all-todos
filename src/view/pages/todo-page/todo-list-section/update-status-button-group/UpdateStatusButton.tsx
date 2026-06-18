import { useStore } from '@iteasy/store-adapter-react';
import {
  memo,
  use,
  useCallback,
  type MouseEvent,
} from 'react';
import { ETaskStatusMove } from '@/domain/task-status';
import { processUpdateTaskStatus } from '@/services/todo-service';
import { EFlatButtonType, FlatButton } from '@/view/ui-kit';
import { updateStatusButtonVM } from '@/view/view-models/for-pages/todo-page';
import { TodoIdContext } from '../contexts';

type TUpdateStatusButtonProps = {
  direction: ETaskStatusMove;
};

export const UpdateStatusButton = memo(({
  direction,
}: TUpdateStatusButtonProps) => {
  const todoId = use(TodoIdContext);

  const onClick = useCallback((event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    processUpdateTaskStatus(todoId, direction);
  }, [todoId, direction]);

  const addons = { direction, todoId };
  const viewModel = useStore(updateStatusButtonVM, { addons });

  if (viewModel.afterUpdateStatus === null) {
    return null;
  }

  return (
    <FlatButton
      htmlType="button"
      onClick={onClick}
      type={direction === ETaskStatusMove.Next ? EFlatButtonType.Primary : EFlatButtonType.Secondary}
    >
      {viewModel.actionLabel}
    </FlatButton>
  );
});
