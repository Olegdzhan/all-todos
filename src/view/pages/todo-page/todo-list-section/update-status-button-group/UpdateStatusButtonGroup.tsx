import { memo } from 'react';
import { ETaskStatusMove } from '@/domain/task-status';
import { UpdateStatusButton } from './UpdateStatusButton';
import styles from './update-status-button-group.module.css';

export const UpdateStatusButtonGroup = memo(() => (
  <div className={styles.btnGroup}>
    <UpdateStatusButton direction={ETaskStatusMove.Prev} />
    <UpdateStatusButton direction={ETaskStatusMove.Next} />
  </div>
));
