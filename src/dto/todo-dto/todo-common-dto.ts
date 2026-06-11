import { ETaskStatus } from '@/domain/task-status';

export type TTodoElementDto = {
  description: string;
  id: string;
  status: ETaskStatus;
  title: string;
};
