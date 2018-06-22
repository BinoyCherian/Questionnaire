import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import { router } from './app.routes';
import {QuestionlistComponent} from './components/questionlist/questionlist.component';
import {QuestionService} from './services/question/question.service';
import {QuestionFormComponent} from './components/question-form/question-form.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {ConfigComponent} from './components/config/config/config.component';
import {LoginService} from './services/login/login.service';
import { RouterModule } from '@angular/router';


import 'rxjs/add/operator/shareReplay';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddquestionComponent } from './components/addquestion/addquestion.component';
import { DeletequestionComponent } from './components/deletequestion/deletequestion.component';
import { EditquestionComponent } from './components/editquestion/editquestion.component';
import { McqchoiceService } from './services/mcqChoice/mcqchoice.service';


@NgModule({
  declarations: [
    AppComponent,
    QuestionlistComponent,
    QuestionFormComponent,
    LoginComponent,
    ConfigComponent,
    DashboardComponent,
    AddquestionComponent,
    DeletequestionComponent,
    EditquestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    router,
  ],
  providers: [
    QuestionService,
    LoginService,
    McqchoiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
