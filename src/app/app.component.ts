import { Component, Inject } from '@angular/core';
import { appName } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-element-micro';

  constructor(@Inject(appName)public appName:string){}

}
