import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  private _counter = 0;

  constructor() { }

  get counter(): number {
    return this._counter;
  }

  add(): void {
    this._counter++;
  }

  decrease(): void {
    this._counter--;
  }
}
