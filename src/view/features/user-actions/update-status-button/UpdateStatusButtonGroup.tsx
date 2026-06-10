import { memo } from 'react';
import { ETodoTaskStatusMove, ETodoStatus } from '@/dto';
import { UpdateStatusButton } from './UpdateStatusButton';
import styles from './update-status-button-group.module.css';

type TUpdateStatusButtonGroupProps = {
  id: string;
  status: ETodoStatus,
};

export const UpdateStatusButtonGroup = memo(({
  id,
  status,
}: TUpdateStatusButtonGroupProps) => {
  return (
    <div className={styles.btnGroup}>
      <UpdateStatusButton
        direction={ETodoTaskStatusMove.Prev}
        id={id}
        status={status}
      />
      <UpdateStatusButton
        direction={ETodoTaskStatusMove.Next}
        id={id}
        status={status}
      />
    </div>
  );
});
