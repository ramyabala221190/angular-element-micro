import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, mergeMap } from 'rxjs';
import { TestService } from '../test.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent {

  constructor(private activeRoute:ActivatedRoute,private testService:TestService){}

  todoDetail$:Observable<any>|undefined;

  ngOnInit(){
    this.todoDetail$=this.activeRoute.paramMap.pipe(
      mergeMap((params:any)=>{
      console.log(params.get('id'));
      return this.testService.fetchToDoDetail(params.get('id'))
    }))
  }

}
