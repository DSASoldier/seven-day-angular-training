import { NgFor, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { AfterViewChecked, AfterViewInit, Component, ComponentRef, DestroyRef, NgModule, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from "@angular/core";
import { TestingService } from "./services/testing.service";
import { DayTwoComponent } from "./day-two/day-two.component";
import { DynamicContentComponent } from "./seventhDay/dynamic-content/dynamic-content.component";
import { inject } from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

 @ViewChild('container',{ read: ViewContainerRef,static:true })
 container!: ViewContainerRef;

 private componentRef: ComponentRef<DynamicContentComponent> | null = null;

 private readonly destroyRef = inject(DestroyRef);

 loadComponent(){
  // this.container.clear();
  this.componentRef = this.container.createComponent(DynamicContentComponent);

  this.componentRef.setInput('data','Hello from App component');

  this.componentRef.instance.close.subscribe(()=>{
    this.destroyComponent();
  })

  this.destroyRef.onDestroy(() => this.componentRef?.destroy());

 }

 destroyComponent(){
  this.componentRef?.destroy();
  this.componentRef = null;
 }
}

