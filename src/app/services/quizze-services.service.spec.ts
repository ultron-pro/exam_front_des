import { TestBed } from '@angular/core/testing';

import { QuizzeServicesService } from './quizze-services.service';

describe('QuizzeServicesService', () => {
  let service: QuizzeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizzeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
