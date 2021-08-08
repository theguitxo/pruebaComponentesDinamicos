import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() title!: Observable<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
