import { memo } from 'react';
import { CreateTodoForm } from '@/view/features/forms';
import { Card, ECardType } from '@/view/ui-kit/panels';
import { Text } from '@/view/ui-kit/labels';
import styles from './create-todo.module.css';

export const CreateTodo = memo(() => {
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
