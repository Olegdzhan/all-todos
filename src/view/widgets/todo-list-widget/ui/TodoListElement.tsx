import { memo, use } from 'react';
import { ETodoStatus } from '@/dto';
import { EDictionaryName } from '@/services/dictionary-service';
import { Card, Text } from '@/view/ui-kit';
import { DictionaryStatus } from '@/view/features/dictionaries';
import { UpdateStatusButtonGroup } from '@/view/features/user-actions';
import { TodoIdContext } from '../context';
import { STATUS_TYPE_MAP } from '../values';
import styles from './todo-list-element.module.css';

type TTodoListElementProps = {
  description: string;
  status: ETodoStatus;
  title: string;
};

export const TodoListElement = memo<TTodoListElementProps>(({
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
