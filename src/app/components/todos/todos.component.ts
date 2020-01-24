import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todos'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[]

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
      title: 'Todo one',
      completed: false
      },
      {
        id: 2,
      title: 'Todo one',
      completed: true
      },
      {
        id: 3,
      title: 'Todo one',
      completed: false
      },
    ]
  }

}
