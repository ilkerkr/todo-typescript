type AddFn = (task: string) => Promise<void>;

interface ITodoType {
  task: string;
  isDone: boolean;
  id: string | number;
  todo?: string;
}

type ToggleFn = (todo: ITodoType) => Promise<void>;
type DeleteFn = (id: string | number) => Promise<void>;

interface ITodoListFn {
  deleteTodo: DeleteFn;
  toggleTodo: ToggleFn;
}
