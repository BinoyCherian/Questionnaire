import { TestBed, inject } from '@angular/core/testing';

import { McqchoiceService } from './mcqchoice.service';

describe('McqchoiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [McqchoiceService]
    });
  });

  it('should be created', inject([McqchoiceService], (service: McqchoiceService) => {
    expect(service).toBeTruthy();
  }));
});
