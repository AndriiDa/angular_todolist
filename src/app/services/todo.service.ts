import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from '../models/Todos'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos?_limit=7'

  constructor(private http:HttpClient) { }


  getTodos(): Observable<Todo[]>{console.log(this.http.get<Todo[]>(this.todosUrl))
    return this.http.get<Todo[]>(this.todosUrl);
  }
}
