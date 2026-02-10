import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CanComponentDeactive } from '../can-component-deactivate.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements CanComponentDeactive {

  editForm=new FormGroup({
    name: new FormControl('')
  });

  saved = false

  save(){
    this.saved = true;
  }

  canDeactivate(): boolean {
    if(!this.saved && this.editForm.dirty){

      return confirm('you have unsa!this.saved && this.editForm.dirtyved changes. do you realy want to leave?');
    }
    return true;
  }
}