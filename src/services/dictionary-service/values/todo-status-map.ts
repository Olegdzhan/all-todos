import { ETaskStatus } from '@/domain/task-status';

export const todoStatusMap = new Map<ETaskStatus, string>([
  [ETaskStatus.Open, 'Открыт'],
  [ETaskStatus.InProgress, 'В работе'],
  [ETaskStatus.Complete, 'Выполнен'],
]);
