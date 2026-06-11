import { memo } from 'react';
import { CreateTodoForm } from '@/view/shared/forms';
import { Card, ECardType, Text } from '@/view/ui-kit';
import styles from './create-todo-section.module.css';

export const CreateTodoSection = memo(() => {
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
