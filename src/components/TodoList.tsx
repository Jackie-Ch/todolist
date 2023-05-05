import { ITodoListProps } from '../types/data';
import TodoItem from './TodoItem';

const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items, toggleTodo, deleteTodo } = props;
  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          {...todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
