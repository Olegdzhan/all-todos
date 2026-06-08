import type { TTodoDto } from '@/dto';

export type TTodoState = {
  errors: string[] | null;
  loading: boolean;
  todos?: TTodoDto.TTodoListOutDto;
};
