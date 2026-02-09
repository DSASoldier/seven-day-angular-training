import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm!:FormGroup;



  ngOnInit(): void {
    
    this.userForm = new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      age:new FormControl('',[Validators.required,Validators.min(18)])
    })
  }

  onSubmit(){
    console.log(this.userForm)
    if(this.userForm.valid){
      console.log('user is valid')
    }
    else{
      console.log('some error occured',)
    }
  }
  
}
