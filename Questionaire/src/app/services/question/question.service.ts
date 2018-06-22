import { QuestionResponse } from '../../datamodel/QuestionResponse';
import {Question} from '../../datamodel/question';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class QuestionService {

  questionsUrl = 'http://localhost:8080/restified/question/questions';

  constructor(public http: HttpClient) {}

  //  getAllQuestions(): Question[] {
  //    return [
  //      new Question(1, 'what is Maven?', 1, ['industrialization', 'project configuration']),
  //      new Question(2, 'what is Hibernate', 1, ['data access', 'orm', 'frameworks', 'java']),
  //      new Question(3, 'what is Spring?', 1, ['program configuration', 'frameworks', 'dependency injection'])
  //    ];
  //  }

  fetchQuestions() {

    return this.http.get<Question[]>(this.questionsUrl);
  }

}
