import { ECreateTodoFormField } from './create-todo-enums';

import type { TCreateTodoForm } from './create-todo-types';
import type { TTodoDto } from '@/dto';

export class CreateTodoAdapter {
  static formToPayload(formData: FormData): TTodoDto.TCreateTodoInDto {
    const form = Object.fromEntries(formData) as TCreateTodoForm;
    return {
      description: form[ECreateTodoFormField.Description],
      title: form[ECreateTodoFormField.Title],
    };
  }
}
