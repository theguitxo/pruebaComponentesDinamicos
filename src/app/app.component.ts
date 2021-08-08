import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ComponentItem } from './components/container-bar/container-bar.component';
import { CounterComponent } from './components/counter/counter.component';
import { IconAlbumComponent } from './components/icon-album/icon-album.component';
import { TitleComponent } from './components/title/title.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  titleSubject: Subject<string> = new Subject();
  componentsList!: ComponentItem[];

  newTitle!: string;
  defaultTitle = 'Titulo de prueba';
  titleModified = false;

  ngOnInit(): void {
    this.componentsList = [
      {
        component: TitleComponent,
        inputs: [
          {
            name: 'title',
            value: this.titleSubject
          }
        ]
      },
      {
        component: CounterComponent,
      },
      {
        component: CounterComponent,
      },
      {
        component: IconAlbumComponent
      }
    ];
  }

  ngAfterViewInit(): void {
    this.updateTitle(this.defaultTitle);
  }

  updateTitle(title: string): void {
    setTimeout(() => {
      this.titleSubject.next(title);
    }, 0);
  }

  handleUpdateTitle(): void {
    this.titleModified = true;
    this.updateTitle(this.newTitle);
  }

  handleResetTitle(): void {
    this.titleModified = false;
    this.newTitle = '';
    this.updateTitle(this.defaultTitle);
  }
}
