import { Injectable } from '@angular/core';
import {Http,Headers,HTTP_PROVIDERS } from '@angular/http';

@Injectable()
export class PingService {

  constructor(
    private http: Http
  ) {}

  doPing() : Promise<string> {
    console.log('do ping service')
    return new Promise<string>((resolve, reject) => {

      this.http.get('/ping').subscribe(answer => {
        resolve(answer.text())
      }, error => {
        reject(error)
        console.log('http error:',error)
      })
    })
  }

}
