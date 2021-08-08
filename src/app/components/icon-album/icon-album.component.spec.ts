import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAlbumComponent } from './icon-album.component';

describe('IconAlbumComponent', () => {
  let component: IconAlbumComponent;
  let fixture: ComponentFixture<IconAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconAlbumComponent ]
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
});
