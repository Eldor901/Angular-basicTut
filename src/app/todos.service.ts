import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay, map} from 'rxjs/operators';


export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}


@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private http: HttpClient) {
  }

  addTodo(todo: Todo): Observable<Todo>
  {
    const headers  =  new HttpHeaders({
      'MycostomHeader': Math.random().toString()
    });

    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
      headers
    })
  }

  fetchTodos(): Observable<Todo[]>{
    let params = new HttpParams();
    params = params.append('_limit', '4');
    params = params.append('custom', 'anything');


    return  this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
        params,
        observe: 'response',
      }).pipe(map(respnse => {
        console.log('Response', respnse);
        return respnse.body;
      }),delay(500), catchError(error => {
        console.log('Error: ', error.message);
        return throwError(error);
      }))
  }

  removeTodo(id): Observable<void> {
    return  this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  completeTodo(id: number): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    })
  }
}
