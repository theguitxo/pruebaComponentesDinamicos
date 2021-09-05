import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

export interface EmitData {
  id: string;
  icon: string;
}
@Component({
  selector: 'app-icon-album',
  templateUrl: './icon-album.component.html',
  styleUrls: ['./icon-album.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconAlbumComponent implements OnInit {

  @Input('id') id!: string;
  @Output('showIcon') showIcon: EventEmitter<EmitData> = new EventEmitter();
  icons!: string[];

  constructor() { }

  ngOnInit(): void {
    this.icons = [
      'icons8-futurama-bender-100.png',
      'icons8-stormtrooper-100.png',
      'icons8-super-mario-100.png',
      'icons8-totoro-100.png'
    ];
  }

  handleShowIcon(icon: string): void {
    this.showIcon.emit({ id: this.id, icon });
  }

}
