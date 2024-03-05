import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import {HttpClientModule} from '@angular/common/http';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // {
    //   provide:APP_BASE_HREF,
    //   useValue:"/todos/"
    // }
  ],
 //bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private injector:Injector){}
  ngDoBootstrap(){
    /*
Hook for manual bootstrapping of the application instead of using bootstrap array in @NgModule annotation. 
This hook is invoked only when the bootstrap array is empty or not provided.
    */
    const todoApp=createCustomElement(AppComponent,{injector:this.injector});
    customElements.define('todo-app',todoApp);
  }

}
