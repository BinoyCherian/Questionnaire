import {MCQChoice} from '../../datamodel/MCQChoice';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class McqchoiceService {

  mcqChoiceUrl = 'http://localhost:8080/restified/mcqchoice/addmcq';

  constructor(public http: HttpClient) {}

  addMcq(mcqChoice: MCQChoice) {
    return this.http.post<boolean>(this.mcqChoiceUrl, mcqChoice, httpOptions);
  }

}
