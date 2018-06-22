import {HttpResponse} from '@angular/common/http';

export class ResponseEdo {

  objects: Object[];

  response: boolean;

  constructor(response: boolean) {
   
    this.response = response;
  }

  

}
