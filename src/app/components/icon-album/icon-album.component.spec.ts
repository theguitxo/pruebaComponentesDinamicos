import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IconViewComponent } from '../icon-view/icon-view.component';

import { IconAlbumComponent } from './icon-album.component';

describe('IconAlbumComponent', () => {
  let component: IconAlbumComponent;
  let fixture: ComponentFixture<IconAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IconAlbumComponent,
        IconViewComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create 4 icon-view components', () => {
    const totalIconsCreated = fixture.debugElement.queryAll(By.css('app-icon-view')).length;

    expect(totalIconsCreated).toBe(4);
  });
});
