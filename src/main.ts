import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { WritWebAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(WritWebAppComponent);

