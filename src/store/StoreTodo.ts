import { makeAutoObservable } from 'mobx';
import { ITodo } from '../types/data';

class StoreTodo {
  value = '';
  todos: ITodo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(value: string): void {
    if (value) {
      this.todos = [
        ...this.todos,
        {
          id: Date.now(),
          title: value,
          completed: false,
        },
      ];
    }
    this.value = '';
  }

  deleteTodo(id: number): void {
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
}

export const storeTodo = new StoreTodo();
