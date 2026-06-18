import type { IViewModel } from '@iteasy/store';

export interface IUseStore {
  <S, V, A>(viewModel: IViewModel<S, V>, config?: { addons?: A, memo?: boolean}): V;
}
