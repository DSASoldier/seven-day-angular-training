import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DayTwoComponent } from './day-two/day-two.component';
import { ParentComponent } from './secondDay/parent/parent.component';
import { ChildComponent } from './secondDay/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DayTwoComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
