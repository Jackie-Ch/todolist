import React, { useState } from 'react';
import { ITodo } from './types/data';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  const handleKeyDownEnter: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.code === 'Enter') {
      addTodo();
    }
  };

  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          completed: false,
        },
      ]);
    }
    setValue('');
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={(event) => handleKeyDownEnter(event)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList items={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </>
  );
};

export default App;
