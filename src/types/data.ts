export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodoItem extends ITodo {
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export interface ITodoListProps {
  items: ITodo[];
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}
