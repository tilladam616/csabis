import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import './styles.css';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent,{providers: [provideHttpClient()]})
  .catch((err) => console.error(err));
