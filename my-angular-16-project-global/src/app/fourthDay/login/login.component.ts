import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(param=>{
      console.log(param)
    })
  }
  

}
