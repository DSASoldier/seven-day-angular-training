import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  user = {
    name: '',
    email: ''
  };

  onSubmitDrivenForm(form: NgForm): void {
    if (form.valid) {
      console.log('Form Submitted!', this.user);
      // You can send this.user data to a backend service here
    } else {
      console.log('Form is invalid');
    }
  }
}
