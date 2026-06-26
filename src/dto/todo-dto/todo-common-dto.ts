import type { ETaskStatus } from '@/domain/task-status';

export type TTodoElementDto = {
  createdAt: string;
  description: string;
  id: number;
  status: ETaskStatus;
  title: string;
  updatedAt: string;
};
