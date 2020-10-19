import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  value = 0;
  title = 'Some Title';

  constructor() { }

  ngOnInit() {
  }

  incBy(event) {
    this.value += event;
  }

}
