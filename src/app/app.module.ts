import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicHostDirective } from './directives/dynamic-host.directive';
import { ContainerBarComponent } from './components/container-bar/container-bar.component';
import { TitleComponent } from './components/title/title.component';
import { CounterComponent } from './components/counter/counter.component';
import { IconViewComponent } from './components/icon-view/icon-view.component';
import { IconAlbumComponent } from './components/icon-album/icon-album.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DynamicHostDirective,
    ContainerBarComponent,
    TitleComponent,
    CounterComponent,
    IconViewComponent,
    IconAlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
