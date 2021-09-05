import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ComponentItem, OutputEvent } from './components/container-bar/container-bar.component';
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
  defaultTitle = 'Test title';
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
        inputs: [
          {
            name: 'title',
            value: 'Counter 1'
          }
        ]
      },
      {
        component: CounterComponent,
        inputs: [
          {
            name: 'title',
            value: 'Counter 2'
          }
        ]
      },
      {
        component: IconAlbumComponent,
        inputs: [
          {
            name: 'id',
            value: 'alert'
          }
        ],
        outputs: [
          {
            name: 'showIcon'
          }
        ]
      },
      {
        component: IconAlbumComponent,
        inputs: [
          {
            name: 'id',
            value: 'console'
          }
        ],
        outputs: [
          {
            name: 'showIcon'
          }
        ]
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

  outputHandler(event: OutputEvent) {
    console.log(event.selector);
    if (event.eventData.id === 'console') {
      console.log(`Event: ${event.eventName}\nData: ${event.eventData.icon}`);
    } else if (event.eventData.id === 'alert') {
      window.alert(`Event: ${event.eventName}\nData: ${event.eventData.icon}`);
    }
  }
}
