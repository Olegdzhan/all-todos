import { useStore } from '@iteasy/store-adapter-react';
import { memo, use } from 'react';
import { EDictionaryName } from '@/services/dictionary-service';
import { DictionaryStatus } from '@/view/shared/dictionaries';
import { Card, Text } from '@/view/ui-kit';
import { taskVM } from '@/view/view-models/for-pages/todo-page';
import { TodoIdContext } from '../contexts';
import { UpdateStatusButtonGroup } from '../update-status-button-group';
import { STATUS_TYPE_MAP } from './task-values';
import styles from './task.module.css';

export const Task = memo(() => {
  const id = use(TodoIdContext);

  const viewModel = useStore(taskVM, { addons: id });

  return (
    <Card
      as="li"
      className={styles.element}
      loading={viewModel.loading}
    >
      <div className={styles.firstLine}>
        <Text as="h3">{viewModel.title}</Text>
        <DictionaryStatus
          className={styles.status}
          dictionary={EDictionaryName.TodoStatusMap}
          statusColor={STATUS_TYPE_MAP.get(viewModel.status)}
          value={viewModel.status}
        />
      </div>
      <Text as="p">{viewModel.description}</Text>
      <UpdateStatusButtonGroup />
    </Card>
  );
});
