import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  username: string
  password: string

  constructor() {}

  ngOnInit() {
  }

  register() {
    console.log('register')
  }

  login(username: string, password: string) {
    console.log(username,password)
  }
}
