import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-view',
  templateUrl: './icon-view.component.html',
  styleUrls: ['./icon-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconViewComponent implements OnInit {
  @Input() icon!: string;

  url!: string;

  constructor() { }

  ngOnInit(): void {
    this.url = `assets/images/${this.icon}`;
  }

}
