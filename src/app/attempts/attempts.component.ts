import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Attempt } from '../shared/attempt.model';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.scss']
})
export class AttemptsComponent implements OnInit, OnChanges {

  @Input()
  remainingAttempts: number;

  private attempts: Attempt[];

  constructor() { }

  ngOnInit() {
    this.attempts = [];
    for (let index = 0; index < this.remainingAttempts; index++) {
      this.attempts.push(new Attempt(true));
    }
    console.log(this.attempts);
  }

  ngOnChanges(changes: SimpleChanges) {
    const index = this.attempts.length - changes.remainingAttempts.previousValue;
    if (index < this.attempts.length) {
      this.attempts[index].isFull = false;
    }
  }
}
