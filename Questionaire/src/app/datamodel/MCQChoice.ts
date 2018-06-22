import { Question } from './question';
export class MCQChoice {
  id: number;
  choice: string;
  valid: boolean;
  question: Question;

}