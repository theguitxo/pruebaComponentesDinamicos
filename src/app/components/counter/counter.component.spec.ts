import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on execute add function, counter must increase one', () => {
    const expectedValue = component.value + 1;
    component.add();

    expect(component.value).toEqual(expectedValue);
  });

  it('on execute decrease function, counter must decrease one', () => {
    const expectedValue = component.value - 1;
    component.decrease();

    expect(component.value).toEqual(expectedValue);
  });
});
