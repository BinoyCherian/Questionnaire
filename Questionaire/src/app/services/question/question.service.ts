import {QuestionResponse} from '../../datamodel/QuestionResponse';
import {Question} from '../../datamodel/question';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class QuestionService {

  questionsUrl = 'http://localhost:8080/restified/question/questions';

  addQuestionUrl = 'http://localhost:8080/restified/question/addquestion';

  constructor(public http: HttpClient) {}

  fetchQuestions() {
    return this.http.get<Question[]>(this.questionsUrl);
  }

  addQuestion(question: Question) {
    return this.http.post<boolean>(this.addQuestionUrl, question, httpOptions);
  }

  getQuestionId(question: Question) {
    return this.http.get<number>(this.questionsUrl);
  }

}
