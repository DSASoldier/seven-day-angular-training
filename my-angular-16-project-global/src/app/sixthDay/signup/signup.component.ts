import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  private route = inject(ActivatedRoute);

  data : any;

  ngOnInit(): void {
    
    this.data = this.route.snapshot.data['resolvedData'];

    console.log(this.data);
  }

}
