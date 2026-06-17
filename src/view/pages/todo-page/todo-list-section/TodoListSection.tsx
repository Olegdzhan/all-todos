import { mergedLoadingAndTodoStore } from '@/store';
import { useStore } from '@/view/ui-controllers';
import { Loadable } from '@/view/ui-kit';
import { todoListSectionVM } from '@/view/view-models/for-pages/todo-page';
import { TodoIdContext } from './contexts';
import { Task } from './task';
import styles from './todo-list-section.module.css';

export const TodoListSection = () => {
  const viewModel = useStore(mergedLoadingAndTodoStore, todoListSectionVM);

  return (
    <Loadable
      as="ul"
      className={styles.list}
      loading={viewModel.listIsLoading}
    >
      {viewModel.todoIds.map((todoId: string) => (
        <TodoIdContext key={todoId} value={todoId}>
          <Task />
        </TodoIdContext>
      ))}
    </Loadable>
  );
};
