import { memo, type SubmitEvent } from 'react';
import { CREATE_TDO_FORM_IDS, ECreateTodoFormField, EFormName } from '@/forms';
import { processCreateTodo } from '@/services/todo-service';
import { FlatButton, EFlatButtonType } from '@/view/ui-kit/buttons';
import { TextArea, TextInput } from '@/view/ui-kit/inputs';
import { Card, ECardType } from '@/view/ui-kit/panels';
import { Text } from '@/view/ui-kit/labels';
import styles from './create-todo.module.css';

export const CreateTodo = memo(() => {
  const handleSubmit = (event: SubmitEvent): void => {
    event.preventDefault();
    processCreateTodo(event.target);
  };

  return (
    <Card as="aside" type={ECardType.Glass}>
      <Text as="h2">Новая задача</Text>
      <Text as="p">
        Добавьте новую задачу в свой список дел
      </Text>
      <form
        className={styles.form}
        name={EFormName.CreateTodo}
        onSubmit={handleSubmit}
      >
        <TextInput
          id={CREATE_TDO_FORM_IDS.Title}
          label="Название задачи"
          name={ECreateTodoFormField.Title}
        />
        <TextArea
          id={CREATE_TDO_FORM_IDS.Description}
          label="Описание задачи"
          name={ECreateTodoFormField.Description}
          placeholder="В рамках задачи предполагается сделать..."
        />
        <FlatButton
          htmlType="submit"
          type={EFlatButtonType.Primary}
        >
          Добавить
        </FlatButton>
      </form>
    </Card>
  );
});
