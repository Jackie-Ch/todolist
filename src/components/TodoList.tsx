import TodoItem from './TodoItem';
import { storeTodo } from '../store/StoreTodo';
import { observer } from 'mobx-react-lite';

const TodoList: React.FC = () => {
  return (
    <div>
      <button onClick={() => storeTodo.activeModalWindow(true)}>
        add todo
      </button>
      {storeTodo.todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default observer(TodoList);
