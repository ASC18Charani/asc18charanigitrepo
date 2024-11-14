import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AddEmpComponent } from './app/add-emp/add-emp.component';

bootstrapApplication(AddEmpComponent, appConfig)
  .catch((err) => console.error(err));
