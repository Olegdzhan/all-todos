import { memo, use } from 'react';
import { EDictionaryName } from '@/services/dictionary-service';
import { mergedLoadingAndTodoStore } from '@/store';
import { DictionaryStatus } from '@/view/shared/dictionaries';
import { useStore } from '@/view/ui-controllers';
import { Card, Text } from '@/view/ui-kit';
import { taskVM } from '@/view/view-models/for-pages/todo-page';
import { TodoIdContext } from '../contexts';
import { UpdateStatusButtonGroup } from '../update-status-button-group';
import { STATUS_TYPE_MAP } from './task-values';
import styles from './task.module.css';

export const Task = memo(() => {
  const id = use(TodoIdContext);

  const { loading, task } = useStore(mergedLoadingAndTodoStore, taskVM, id);

  return (
    <Card
      as="li"
      className={styles.element}
      loading={loading}
    >
      <div className={styles.firstLine}>
        <Text as="h3">{task.title}</Text>
        <DictionaryStatus
          className={styles.status}
          dictionary={EDictionaryName.TodoStatusMap}
          statusColor={STATUS_TYPE_MAP.get(task.status)}
          value={task.status}
        />
      </div>
      <Text as="p">{task.description}</Text>
      <UpdateStatusButtonGroup id={id} status={task.status} />
    </Card>
  );
});
