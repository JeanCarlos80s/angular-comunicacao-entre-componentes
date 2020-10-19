import { TimerComponent } from './timer/timer.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  @ViewChild('secondTimer')
  private mTimer: TimerComponent;

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.mTimer.start();
  }

  stop() {
    this.mTimer.stop();
  }

  clean() {
    this.mTimer.clean();
  }

}
