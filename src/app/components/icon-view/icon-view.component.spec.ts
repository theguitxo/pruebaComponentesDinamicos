import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconViewComponent } from './icon-view.component';

describe('IconViewComponent', () => {
  let component: IconViewComponent;
  let fixture: ComponentFixture<IconViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconViewComponent);
    component = fixture.componentInstance;

    component.icon = 'icons8-futurama-bender-100.png';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component must create a valid url for the image', () => {
    const expectedValue = 'assets/images/icons8-futurama-bender-100.png';

    expect(component.url).toEqual(expectedValue);
  });
});
