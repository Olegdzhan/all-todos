import { ETodoStatus } from '@/dto';
import { EStatusType } from '@/view/ui-kit';

export const STATUS_TYPE_MAP = new Map<ETodoStatus, EStatusType>([
  [ETodoStatus.Complete, EStatusType.Success],
  [ETodoStatus.InProgress, EStatusType.Warning],
  [ETodoStatus.Open, EStatusType.Info],
]);
