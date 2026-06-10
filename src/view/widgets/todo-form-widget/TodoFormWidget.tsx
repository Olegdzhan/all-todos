import { memo } from 'react';
import { CreateTodoForm } from '../../features/forms';
import { Card, ECardType } from '../../ui-kit/panels';
import { Text } from '../../ui-kit/labels';
import styles from './todo-form-widget.module.css';

export const TodoFormWidget = memo(() => {
  return (
    <Card
      as="aside"
      className={styles.card}
      type={ECardType.Glass}
    >
      <Text as="h2">Новая задача</Text>
      <Text as="p">
        Добавьте новую задачу в свой список дел
      </Text>
      <CreateTodoForm/>
    </Card>
  );
});
