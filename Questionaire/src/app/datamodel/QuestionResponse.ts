import {Question} from './question';
export class QuestionResponse {

  questions: Question[];

  constructor(questionList: Question[]) {
    this.questions = questionList;
  }
}