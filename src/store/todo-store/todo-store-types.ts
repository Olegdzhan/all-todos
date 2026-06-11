import type { TTodoDto } from '@/dto';

export type TTodoState = {
  errors: string[] | null;
  todos?: TTodoDto.TTodoListOutDto;
};
