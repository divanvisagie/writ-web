import { Injectable } from '@angular/core'
import { LoginResponse } from '../models/login-response'



@Injectable()
export class AuthenticationService {

  constructor() {}

  login() : Promise<LoginResponse> {
    return new Promise<LoginResponse>((resolve,reject) => {
      resolve({
        token: 'fake-token'
      })
    })
  }

  isAuthenticated() : boolean {
    return true
  }

}
