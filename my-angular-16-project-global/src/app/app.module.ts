import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DayTwoComponent } from './day-two/day-two.component';
import { ParentComponent } from './secondDay/parent/parent.component';
import { ChildComponent } from './secondDay/child/child.component';
import { LoginComponent } from './day-three/login/login.component';
import { AboutComponent } from './day-three/about/about.component';
import { CareerComponent } from './day-three/career/career.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DayTwoComponent,
    ParentComponent,
    ChildComponent,
    LoginComponent,
    AboutComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
