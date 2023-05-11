import TodoList from './components/TodoList';
import { observer } from 'mobx-react-lite';
import { storeTodo } from './store/StoreTodo.ts';

const App: React.FC = observer(() => {
  return (
    <>
      <div>
        <input
          type="text"
          value={storeTodo.value}
          onChange={(event) => storeTodo.handleChange(event)}
          onKeyDown={(event) => storeTodo.handleKeyDownEnter(event)}
        />
        <button onClick={() => storeTodo.addTodo(storeTodo.value)}>Add</button>
      </div>
      <TodoList />
    </>
  );
});

export default App;
