import type { ECreateTodoFormField } from './create-todo-enums';

export type TCreateTodoForm = {
  [ECreateTodoFormField.Description]: string;
  [ECreateTodoFormField.Title]: string;
};
