import { ITodo } from '../types/data';
import { storeTodo } from '../store/StoreTodo';
import { observer } from 'mobx-react-lite';

const TodoItem: React.FC<ITodo> = ({ id, title, completed }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => storeTodo.toggleTodo(id)}
      />
      <span>{title}</span>
      <button onClick={() => storeTodo.deleteTodo(id)}>X</button>
    </div>
  );
};

export default observer(TodoItem);
