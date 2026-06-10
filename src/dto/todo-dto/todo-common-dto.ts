import { ETodoStatus } from './todo-enums';

export type TTodoElementDto = {
  description: string;
  id: string;
  status: ETodoStatus;
  title: string;
};
