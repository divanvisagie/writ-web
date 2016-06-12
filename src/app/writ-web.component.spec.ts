import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WritWebAppComponent } from '../app/writ-web.component';

import { Component, provide } from '@angular/core'
import { AuthenticationService } from './authentication.service';

beforeEachProviders(() => [WritWebAppComponent]);

describe('App: WritWeb', () => {

  class GeneralMock {}

  beforeEachProviders(() => [
    provide(AuthenticationService, {useClass: AuthenticationService})
  ]);

  it('should create the app',
      inject([WritWebAppComponent], (app: WritWebAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Writ\'',
      inject([WritWebAppComponent], (app: WritWebAppComponent) => {
    expect(app.title).toEqual('Writ');
  }));
});
