import {MCQChoice} from '../../datamodel/MCQChoice';
import {Question} from '../../datamodel/question';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

  question: Question;

  mcqChoice: MCQChoice[];


  constructor() {}

  ngOnInit() {
  }

}
