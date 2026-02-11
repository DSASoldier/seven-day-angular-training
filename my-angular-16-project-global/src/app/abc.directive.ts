import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAbc]'
})
export class AbcDirective {

  @HostBinding("style.color") color!:string
  defaultColor:string = "black";
  hoverColor:string = "blue";

  constructor() {
    
  }
  
  ngOnInit(){
    this.color = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.color = this.hoverColor;
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.color = this.defaultColor
  }
}
