import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TestService } from '../test.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  constructor(private service:TestService){}

  todos$:Observable<any> | undefined;

  ngOnInit(){
    this.todos$=this.service.fetchToDos();
  }

}
