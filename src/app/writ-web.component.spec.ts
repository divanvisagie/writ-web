import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WritWebAppComponent } from '../app/writ-web.component';

beforeEachProviders(() => [WritWebAppComponent]);

describe('App: WritWeb', () => {
  it('should create the app',
      inject([WritWebAppComponent], (app: WritWebAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'writ-web works!\'',
      inject([WritWebAppComponent], (app: WritWebAppComponent) => {
    expect(app.title).toEqual('writ-web works!');
  }));
});