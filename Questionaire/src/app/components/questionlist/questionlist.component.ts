import {Question} from '../../datamodel/question';
import {QuestionService} from '../../services/question/question.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {

  questionList: Question[];

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.questionList = this.questionService.getAllQuestions();
  }

}
