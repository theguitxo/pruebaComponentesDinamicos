import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { DynamicHostDirective } from 'src/app/directives/dynamic-host.directive';

export interface ComponentInput {
  name: string;
  value: any;
}

export interface ComponentItem {
  component: any;
  inputs?: ComponentInput[];
}

@Component({
  selector: 'app-container-bar',
  templateUrl: './container-bar.component.html',
  styleUrls: ['./container-bar.component.scss']
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
      const createdComponent = this.dinamycHost.viewContainerRef.createComponent(component) as any;
      item.inputs?.forEach(input => {
        createdComponent.instance[input.name] = input.value;
      });
    });
  }

}
