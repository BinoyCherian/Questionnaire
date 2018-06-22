

import { AppComponent } from './app.component';
import { AddquestionComponent } from './components/addquestion/addquestion.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionlistComponent } from './components/questionlist/questionlist.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'questions', component: QuestionlistComponent},
   {path: 'addquestion', component: AddquestionComponent}
];


export const router = RouterModule.forRoot(appRoutes);
