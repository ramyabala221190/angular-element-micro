import { Component, Inject } from '@angular/core';
import { appName } from './app.module';
import { ConfigService, appConfigModel } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-element-micro';

  constructor(private configService:ConfigService,@Inject(appName)public appName:string){}

  environment:string|undefined="";

  ngOnInit(){
    let configurationDetails:appConfigModel|undefined=this.configService.retreiveConfigurationDetails();
    this.environment=configurationDetails?.env;
  }

}
