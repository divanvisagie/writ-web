import { Component, OnInit } from '@angular/core'
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router'
import { PingComponent } from '../ping';
import { LoginComponent } from '../login';

@Component({
  moduleId: module.id,
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
export class AdminComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
