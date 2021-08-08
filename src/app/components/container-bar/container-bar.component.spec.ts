import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBarComponent } from './container-bar.component';

describe('ContainerBarComponent', () => {
  let component: ContainerBarComponent;
  let fixture: ComponentFixture<ContainerBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
