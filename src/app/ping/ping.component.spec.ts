import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PingComponent } from './ping.component';
import { PingService } from '../ping.service';
import {Http, HTTP_PROVIDERS, XHRBackend, BrowserXhr} from '@angular/http';

class MockPingService {

}

class MockHttp {

}

describe('Component: Ping', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    provide(Http, {useClass: MockHttp}),
    provide(PingService, {useClass: MockPingService}),
    PingComponent
  ]);
  beforeEach(inject([TestComponentBuilder], function(tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PingComponent],
    (component: PingComponent) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PingComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PingComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-ping></app-ping>
  `,
  directives: [PingComponent],
  // viewProviders: [HTTP_PROVIDERS],
  // providers: [PingService, Http]
})
class PingComponentTestController {
}
