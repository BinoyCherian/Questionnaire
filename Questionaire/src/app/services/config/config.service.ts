import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {
  http: HttpClient;

  configUrl = 'assets/config.json';

  getConfig() {
    return this.http.get(this.configUrl);
  }

  constructor() {}
}
