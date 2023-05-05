import { ITodoItem } from '../types/data';

const TodoItem: React.FC<ITodoItem> = (todo) => {
  const { id, title, completed, deleteTodo, toggleTodo } = todo;

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span>{title}</span>
      <button onClick={() => deleteTodo(id)}>X</button>
    </div>
  );
};

export default TodoItem;
