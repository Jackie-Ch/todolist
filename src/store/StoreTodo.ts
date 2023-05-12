import { makeAutoObservable } from 'mobx';
import { ITodo } from '../types/data';

class StoreTodo {
  value = '';
  todos: ITodo[] = [];
  activeModal = false;
  // length = this.todos.length;

  constructor() {
    makeAutoObservable(this);
  }

  getTodos() {
    fetch('http://localhost:3001/todos')
      .then((todo) => todo.json())
      .then((arrayTodo) => {
        this.todos = arrayTodo;
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  addTodo(value: string): any {
    const newTodo = {
      title: value,
      completed: false,
    };

    fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    });

    console.log('addTodos run');

    this.value = '';

    this.activeModal = false;

    // this.length += 1;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleTodo(id: number): void {
    this.todos = this.todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.value = event.target.value;
  }

  handleKeyDownEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.code === 'Enter') {
      storeTodo.addTodo(storeTodo.value);
    }
  }

  activeModalWindow(bool: boolean) {
    console.log('activeModalWindow', bool);

    this.activeModal = bool;
  }
}

export const storeTodo = new StoreTodo();
