import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PingService } from './ping.service';

describe('Ping Service', () => {
  beforeEachProviders(() => [PingService]);

  it('should ...',
      inject([PingService], (service: PingService) => {
    expect(service).toBeTruthy();
  }));
});
