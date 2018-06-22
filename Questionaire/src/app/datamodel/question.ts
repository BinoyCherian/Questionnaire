export class Question {
  id: number;
  question: string;
  type: string;

  constructor(id: number, question: string, type: string) {
    this.question = question;
    this.type = type;
  }

}
