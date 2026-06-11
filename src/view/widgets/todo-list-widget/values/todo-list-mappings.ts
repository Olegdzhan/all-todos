import { ETaskStatus } from '@/domain/task-status';
import { EStatusType } from '@/view/ui-kit';

export const STATUS_TYPE_MAP = new Map<ETaskStatus, EStatusType>([
  [ETaskStatus.Complete, EStatusType.Success],
  [ETaskStatus.InProgress, EStatusType.Warning],
  [ETaskStatus.Open, EStatusType.Info],
]);
