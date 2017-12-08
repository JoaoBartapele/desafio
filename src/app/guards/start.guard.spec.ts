import { TestBed, async, inject } from '@angular/core/testing';

import { StartGuard } from './start.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('StartGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StartGuard],
      imports: [RouterTestingModule]
    });
  });

  it('should ...', inject([StartGuard], (guard: StartGuard) => {
    expect(guard).toBeTruthy();
  }));
});
