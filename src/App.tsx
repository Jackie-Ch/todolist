import { useEffect } from 'react';
import TodoList from './components/TodoList';
import Modal from './components/Modal';
import { observer } from 'mobx-react-lite';
import { storeTodo } from './store/StoreTodo.ts';

const App: React.FC = observer(() => {
  console.log('render App');

  useEffect(() => {
    storeTodo.getTodos();
    console.log('useEffect');
  }, [storeTodo.todos.length]);

  return <>{(storeTodo.activeModal && <Modal />) || <TodoList />}</>;
});

export default App;
