import { TestBed, inject } from '@angular/core/testing';

import { ChatLogService } from './chat-log.service';

describe('ChatLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatLogService]
    });
  });

  it('should be created', inject([ChatLogService], (service: ChatLogService) => {
    expect(service).toBeTruthy();
  }));
});
