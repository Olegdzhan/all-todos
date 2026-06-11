import { memo } from 'react';
import { ETaskStatus, ETaskStatusMove } from '@/domain/task-status';
import { UpdateStatusButton } from './UpdateStatusButton';
import styles from './update-status-button-group.module.css';

type TUpdateStatusButtonGroupProps = {
  id: string;
  status: ETaskStatus,
};

export const UpdateStatusButtonGroup = memo(({
  id,
  status,
}: TUpdateStatusButtonGroupProps) => {
  return (
    <div className={styles.btnGroup}>
      <UpdateStatusButton
        direction={ETaskStatusMove.Prev}
        id={id}
        status={status}
      />
      <UpdateStatusButton
        direction={ETaskStatusMove.Next}
        id={id}
        status={status}
      />
    </div>
  );
});
