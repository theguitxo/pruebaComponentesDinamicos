import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [CounterService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  @Input() title!: string;

  value!: number;

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit(): void {
    this.updateValue();
  }

  add(): void {
    this.counterService.add();
    this.updateValue();
  }

  decrease(): void {
    this.counterService.decrease();
    this.updateValue();
  }

  updateValue(): void {
    this.value = this.counterService.counter;
  }
}
