import { Component, OnInit } from '@angular/core';
import {Http, HTTP_PROVIDERS, XHRBackend, BrowserXhr} from '@angular/http';
import { PingService } from '../ping.service';

@Component({
  moduleId: module.id,
  selector: 'app-ping',
  templateUrl: 'ping.component.html',
  styleUrls: ['ping.component.css'],
  // viewProviders: [HTTP_PROVIDERS],
  providers: [PingService]
})
export class PingComponent implements OnInit {

  constructor(
    private pingService: PingService
  ) {}

  answer: string = 'press the button'

  doPing() {
    console.log('do the ping in component')
    this.pingService.doPing().then(answer => {
      this.answer = answer
      console.log('got answer in component')
    })
  }

  ngOnInit() {
  }

}
