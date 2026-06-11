import { createLoaderId } from './loaders-utils';

export const LOADERS_IDS = {
  CREATE_TASK: 'create_task',
  GET_TODO_LIST: 'get_todo_list',
  UPDATE_STATUS$: createLoaderId('update_status'),
};
