import { customIncrement } from './../counter/state/counter.action';
import { CounterState } from './../counter/state/counter.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {
  value: number = 0;
  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.store.dispatch(customIncrement({count: this.value}));
  }

}
