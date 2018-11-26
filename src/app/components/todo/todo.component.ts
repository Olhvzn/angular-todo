import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoServiceService } from '../../todo-service.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  @ViewChild ('form') form;

  constructor(private service: TodoServiceService) {}

  ngOnInit() {
    this.todos = this.service.getTodos();
    this.todo = this.service.getTodo();
  }

  todo:Todo ;

  todos: Todo[];

  deleteTask(id: string) {
   this.service.deleteTask(id);
   this.todos = this.service.getTodos();
  }

  identify(index) {
    return index;
  }

  addTodo() {
    this.service.addTodo();
    this.service.getTodos();
  }


}
