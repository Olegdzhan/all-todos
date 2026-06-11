import { ECreateTodoFormField } from './create-todo';
import { EFormName } from './forms-enums';
import { createFormFieldsIds } from './forms-utils';

export const CREATE_TDO_FORM_IDS = createFormFieldsIds(EFormName.CreateTodo, ECreateTodoFormField);
