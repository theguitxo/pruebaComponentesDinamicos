import { Component, ComponentFactoryResolver } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicHostDirective } from 'src/app/directives/dynamic-host.directive';

import { ContainerBarComponent } from './container-bar.component';

@Component({
  selector: 'mock-component',
  template: '<div></div>'
})
export class MockComponent {}

describe('ContainerBarComponent', () => {
  let component: ContainerBarComponent;
  let fixture: ComponentFixture<ContainerBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ContainerBarComponent,
        DynamicHostDirective
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerBarComponent);
    component = fixture.componentInstance;

    component.componentsList = [
      {
        component: MockComponent
      }
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
