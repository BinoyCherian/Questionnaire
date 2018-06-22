import {MCQChoice} from '../../datamodel/MCQChoice';
import {Question} from '../../datamodel/question';
import {McqchoiceService} from '../../services/mcqChoice/mcqchoice.service';
import {QuestionService} from '../../services/question/question.service';
import {HttpHeaders} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

  question: Question;

  mcqChoice1: MCQChoice;
  mcqChoice2: MCQChoice;
  mcqChoice3: MCQChoice;
  mcqChoice4: MCQChoice;

  correctOption: string;
  questionType: string;

  created: boolean;

  constructor(private questionService: QuestionService, private mcqChoiceService: McqchoiceService) {}

  ngOnInit() {
    this.question = new Question(0, '', '');
    this.mcqChoice1 = new MCQChoice(0, '', false, this.question);
    this.mcqChoice2 = new MCQChoice(0, '', false, this.question);
    this.mcqChoice3 = new MCQChoice(0, '', false, this.question);
    this.mcqChoice4 = new MCQChoice(0, '', false, this.question);


  }

  addQuestion() {
    this.question.type = this.questionType;

    this.questionService.addQuestion(this.question).
      subscribe(
      data => {
        if (data) {
          this.created = data;
        }
      }
      );

    console.log(this.created);


    this.mcqChoice1.question = this.question;
    this.mcqChoice2.question = this.question;
    this.mcqChoice3.question = this.question;
    this.mcqChoice4.question = this.question;

    this.mcqChoiceService.addMcq(this.mcqChoice1).
      subscribe(
      data => {
        if (data) {
          this.created = data;
        }
      }
      );
    this.mcqChoiceService.addMcq(this.mcqChoice2).
      subscribe(
      data => {
        if (data) {
          this.created = data;
        }
      }
      );
    this.mcqChoiceService.addMcq(this.mcqChoice3).
      subscribe(
      data => {
        if (data) {
          this.created = data;
        }
      }
      );
    this.mcqChoiceService.addMcq(this.mcqChoice4).
      subscribe(
      data => {
        if (data) {
          this.created = data;
        }
      }
      );

  }

}
