import { Component } from '@angular/core';
import { LoginComponent } from './login';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { PingComponent } from './ping';
import { AdminComponent } from './admin';
import { RegisterComponent } from './register';

@Component({
  moduleId: module.id,
  selector: 'writ-web-app',
  templateUrl: 'writ-web.component.html',
  styleUrls: ['writ-web.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/', component: LoginComponent},
  {path: '/login', component: LoginComponent},
  {path: '/ping', component: PingComponent},
  {path: '/admin', component: AdminComponent},
  {path: '/register', component: RegisterComponent}
])
export class WritWebAppComponent {
  title = 'Writ';
}
