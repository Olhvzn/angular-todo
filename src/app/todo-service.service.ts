import { Injectable } from '@angular/core';
import { Todo } from './models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

constructor() { }

todos: Todo[] = [
  {
    title: 'Title',
    text: 'Text Title',
    complete: false,
    id: '1'
  },
  {
    title: 'Title',
    text: 'Text Title',
    complete: false,
    id: '2'
  },
  {
    title: 'Title',
    text: 'Text Title',
    complete: false,
    id: '3'
  }
];

todo: Todo = {
  title: '',
  text: '',
  complete: false,
  id: ''
};

getTodos() {
  return this.todos;
}

getTodo() {
  return this.todo;
}

addTodo() {
  const newTask = {
    title: this.todo.title,
    text: this.todo.text,
    complete: false,
    id: String(this.todos.length + 1),
  };
  // this.form.reset();
  this.todos.unshift(newTask);
}

deleteTask(id: string) {
  this.todos = this.todos.filter( (x) => x.id !== id );
}


}
