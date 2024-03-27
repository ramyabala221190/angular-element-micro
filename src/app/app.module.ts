import { APP_INITIALIZER, InjectionToken, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import {HttpClientModule} from '@angular/common/http';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

function appInitialization(envConfigLibService:ConfigService) :()=>Observable<any>{
  return ()=>envConfigLibService.setConfigurationDetails() 
}

export const appName=new InjectionToken("appName");

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
    {
      provide:APP_INITIALIZER,
      useFactory:appInitialization,
      deps:[ConfigService],
      multi:true
    },
    {
      provide:appName,
      useValue:"micro-front-end-1"
    }
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
