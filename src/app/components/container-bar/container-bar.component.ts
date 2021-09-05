import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, EventEmitter, Input, OnChanges, OnDestroy, Output, Type, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DynamicHostDirective } from 'src/app/directives/dynamic-host.directive';

export interface ComponentInput {
  name: string;
  value: any;
}

export interface ComponentOutput {
  name: string;
}
export interface ComponentItem<T = any> {
  component: Type<T>;
  inputs?: ComponentInput[];
  outputs?: ComponentOutput[];
}

export interface OutputEvent {
  selector: string;
  eventName: string;
  eventData: any;
}
@Component({
  selector: 'app-container-bar',
  templateUrl: './container-bar.component.html',
  styleUrls: ['./container-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerBarComponent implements OnChanges, OnDestroy {
  @ViewChild(DynamicHostDirective, { static: true}) dinamycHost!: DynamicHostDirective;
  @Input() componentsList!: ComponentItem[];

  @Output() output: EventEmitter<OutputEvent> = new EventEmitter();

  subscriptions: Subscription[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnChanges(): void {
    if (this.dinamycHost) {
      this.dinamycHost.viewContainerRef.clear();
      this.componentsList?.forEach((item) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(item.component);
        const createdComponent = this.dinamycHost.viewContainerRef.createComponent(component);

        item.inputs?.forEach(input => {
          createdComponent.instance[input.name] = input.value;
        });

        item.outputs?.forEach(output => {
          const newSubscription: Subscription = createdComponent.instance[output.name].subscribe((data: any) => {
            this.output.emit({
              selector: component.selector,
              eventName: output.name,
              eventData: data
            });
          });

          this.subscriptions = [...this.subscriptions, newSubscription];
        });
      });
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
