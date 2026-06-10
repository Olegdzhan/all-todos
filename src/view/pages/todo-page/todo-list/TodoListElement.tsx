import { memo } from 'react';
import { ETodoStatus } from '@/dto';
import { EDictionaryName } from '@/utils/dictionaries';
import { Card, Text } from '@/view/ui-kit';
import { DictionaryStatus } from '@/view/features/dictionaries';
import { STATUS_TYPE_MAP } from './todo-list-element-constants';
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
    </Card>
  );
});
