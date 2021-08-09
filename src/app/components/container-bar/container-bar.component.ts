import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, Type, ViewChild } from '@angular/core';
import { DynamicHostDirective } from 'src/app/directives/dynamic-host.directive';

export interface ComponentInput {
  name: string;
  value: any;
}

export interface ComponentItem<T = any> {
  component: Type<T>;
  inputs?: ComponentInput[];
}

@Component({
  selector: 'app-container-bar',
  templateUrl: './container-bar.component.html',
  styleUrls: ['./container-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerBarComponent implements OnInit {
  @ViewChild(DynamicHostDirective, { static: true}) dinamycHost!: DynamicHostDirective;
  @Input() componentsList!: ComponentItem[];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.dinamycHost.viewContainerRef.clear();
    this.componentsList.forEach((item) => {
      const component = this.componentFactoryResolver.resolveComponentFactory(item.component);
      const createdComponent = this.dinamycHost.viewContainerRef.createComponent(component);
      item.inputs?.forEach(input => {
        createdComponent.instance[input.name] = input.value;
      });
    });
  }

}
