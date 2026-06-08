import { todoStore } from '@/store';
import { createReactStore } from '../react-controller';

export const [
  TodoStoreContext,
  TodoStoreProvider,
] = createReactStore(todoStore);
