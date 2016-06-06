import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import { PingService } from './ping.service';
import { provide } from '@angular/core';
class MockHttp {

}

describe('Ping Service', () => {
  beforeEachProviders(() => [
    provide(Http, { useClass: MockHttp }),
    PingService
  ]);

  it('should ...',
    inject([PingService], (service: PingService) => {
      expect(service).toBeTruthy();
    }));
});
