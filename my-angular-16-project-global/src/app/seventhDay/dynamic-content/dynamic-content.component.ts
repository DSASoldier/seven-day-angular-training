import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css']
})
export class DynamicContentComponent {
  @Input() data!: string;

  @Output() close = new EventEmitter<void>();


  onClick(){
    this.close.emit();
  }
}
