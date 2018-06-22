import {Question} from './question';
export class MCQChoice {
  id: number;
  choice: string;
  valid: boolean;
  question: Question;

  constructor(id: number, choice: string, valid: boolean, question: Question) {
    this.id = id;
    this.choice = choice;
    this.valid = valid;
    this.question = question;
  }

}
