import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {QuestionlistComponent} from './components/questionlist/questionlist.component';
import {QuestionService} from './services/question/question.service';
import {QuestionFormComponent} from './components/question-form/question-form.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {ConfigComponent} from './components/config/config/config.component';
import {LoginService} from './services/login/login.service';

import 'rxjs/add/operator/shareReplay';


@NgModule({
  declarations: [
    AppComponent,
    QuestionlistComponent,
    QuestionFormComponent,
    LoginComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    QuestionService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
