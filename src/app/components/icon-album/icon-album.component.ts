import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-album',
  templateUrl: './icon-album.component.html',
  styleUrls: ['./icon-album.component.scss']
})
export class IconAlbumComponent implements OnInit {

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

}
