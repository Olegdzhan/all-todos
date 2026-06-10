import { ETodoStatus } from '@/dto';

export const todoStatusMap = new Map<ETodoStatus, string>([
  [ETodoStatus.Open, 'Открыт'],
  [ETodoStatus.InProgress, 'В работе'],
  [ETodoStatus.Complete, 'Выполнен'],
]);
