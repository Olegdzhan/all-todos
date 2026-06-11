import { memo, use } from 'react';
import { ETaskStatus } from '@/domain/task-status';
import { EDictionaryName } from '@/services/dictionary-service';
import { Card, Text } from '@/view/ui-kit';
import { DictionaryStatus } from '@/view/shared/dictionaries';
import { UpdateStatusButtonGroup } from '../update-status-button-group';
import { TodoIdContext } from '../contexts';
import { STATUS_TYPE_MAP } from './task-values';
import styles from './task.module.css';

type TTodoListElementProps = {
  description: string;
  status: ETaskStatus;
  title: string;
};

export const Task = memo<TTodoListElementProps>(({
  description,
  status,
  title,
}) => {
  const id = use(TodoIdContext);

  return (
    <Card as="li" className={styles.element}>
      <div className={styles.firstLine}>
        <Text as="h3">{title}</Text>
        <DictionaryStatus
          className={styles.status}
          dictionary={EDictionaryName.TodoStatusMap}
          statusColor={STATUS_TYPE_MAP.get(status)}
          value={status}
        />
      </div>
      <Text as="p">{description}</Text>
      <UpdateStatusButtonGroup id={id} status={status} />
    </Card>
  );
});
