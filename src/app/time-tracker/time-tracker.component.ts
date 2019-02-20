import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TimeTrackerComponent implements OnInit {

  date: Date;
  hour: number;
  minute: number;

  ngOnInit() {
    this.resetTime();
  }

  onChange(hourOrMinute: string) {
    if (hourOrMinute === 'hour' && this.hour <= 23) {
      this.date.setHours(this.hour);
    } else if (hourOrMinute === 'minute' && this.minute <= 59) {
      this.date.setMinutes(this.minute);
    }
    this.updateTime();
  }

  addOneHour() {
    this.date.setHours(this.date.getHours() + 1);
    this.updateTime();
  }

  addHalf() {
    this.date.setMinutes(this.date.getMinutes() + 30);
    this.updateTime();
  }

  addEight() {
    this.date.setHours(this.date.getHours() + 8);
    this.updateTime();
  }

  updateTime() {
    this.hour = this.date.getHours();
    this.minute = this.date.getMinutes();
  }

  resetTime() {
    this.date = new Date();
    this.updateTime();
  }
}
