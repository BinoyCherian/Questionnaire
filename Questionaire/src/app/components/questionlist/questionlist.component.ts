import {QuestionResponse} from '../../datamodel/QuestionResponse';
import {Question} from '../../datamodel/question';
import {QuestionService} from '../../services/question/question.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {

  questionList: Question[] = [];

  constructor(private questionService: QuestionService) {}

  ngOnInit() {

    this.questionService.fetchQuestions().
      subscribe(
      data => {
        if (data) {
          this.questionList = data;
        }
      }
      );

    console.log(this.questionList);
  }

}
